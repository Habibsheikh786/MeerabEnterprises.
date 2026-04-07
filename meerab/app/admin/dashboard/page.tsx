"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Contact { _id: string; name: string; email: string; message: string; createdAt: string; }
interface Product { _id: string; name: string; price: number; description: string; category: string; image: string; createdAt: string; }
interface Lead { _id: string; name: string; email: string; phone: string; company: string; source: string; status: string; notes: string; revenue: number; createdAt: string; }
interface TrafficStats { total: number; todayCount: number; topPages: { _id: string; count: number }[]; sources: { _id: string; count: number }[]; dailyTraffic: { _id: string; count: number }[]; }
interface LeadStats { total: number; newLeads: number; connected: number; converted: number; lost: number; totalRevenue: number; }

const STATUS_COLORS: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Connected: "bg-amber-100 text-amber-700",
  Converted: "bg-emerald-100 text-emerald-700",
  Lost: "bg-red-100 text-red-700",
};

const SOURCE_ICONS: Record<string, string> = {
  Google: "🔍", Facebook: "👥", Instagram: "📸", WhatsApp: "💬",
  Twitter: "🐦", Referral: "🔗", Direct: "🌐",
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "inbox", label: "Contact Inbox" },
  { id: "leads", label: "Leads" },
  { id: "pipeline", label: "Pipeline" },
  { id: "conversions", label: "Conversions" },
  { id: "traffic", label: "Traffic" },
  { id: "products", label: "Products" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [token, setToken] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [trafficStats, setTrafficStats] = useState<TrafficStats | null>(null);
  const [leadStats, setLeadStats] = useState<LeadStats | null>(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "", category: "Desiccant", image: "" });
  const [productMsg, setProductMsg] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [newLead, setNewLead] = useState({ name: "", email: "", phone: "", company: "", source: "Manual", status: "New", notes: "", revenue: "" });
  const [leadMsg, setLeadMsg] = useState("");
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  const API = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) router.push("/admin");
    else setToken(t);
  }, [router]);

  const headers = useCallback(() => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }), [token]);

  const loadAll = useCallback(async () => {
    if (!token) return;
    try {
      const [cRes, pRes, lRes, tRes, lsRes] = await Promise.all([
        fetch(`${API}/admin/api/contact`, { headers: headers() }),
        fetch(`${API}/admin/api/products`, { headers: headers() }),
        fetch(`${API}/admin/api/leads`, { headers: headers() }),
        fetch(`${API}/admin/api/traffic/stats`, { headers: headers() }),
        fetch(`${API}/admin/api/leads/stats`, { headers: headers() }),
      ]);
      if (cRes.status === 401) { router.push("/admin"); return; }
      const [c, p, l, t, ls] = await Promise.all([cRes.json(), pRes.json(), lRes.json(), tRes.json(), lsRes.json()]);
      setContacts(Array.isArray(c) ? c : []);
      setProducts(Array.isArray(p) ? p : []);
      setLeads(Array.isArray(l) ? l : []);
      setTrafficStats(t);
      setLeadStats(ls);
    } catch { /* silent */ }
  }, [token, API, headers, router]);

  useEffect(() => { if (token) loadAll(); }, [token, loadAll]);

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/admin/api/products`, { method: "POST", headers: headers(), body: JSON.stringify({ ...newProduct, price: Number(newProduct.price) }) });
      const data = await res.json();
      if (data.success) { setProductMsg("success"); setNewProduct({ name: "", price: "", description: "", category: "Desiccant", image: "" }); loadAll(); setTimeout(() => setProductMsg(""), 3000); }
    } catch { setProductMsg("error"); }
  };

  const updateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    try {
      const res = await fetch(`${API}/admin/api/products/${editingProduct._id}`, { method: "PUT", headers: headers(), body: JSON.stringify({ ...editingProduct, price: Number(editingProduct.price) }) });
      const data = await res.json();
      if (data.success) { loadAll(); setTimeout(() => setEditingProduct(null), 500); }
    } catch { /* silent */ }
  };

  const deleteProduct = async (id: string) => {
    await fetch(`${API}/admin/api/products/${id}`, { method: "DELETE", headers: headers() });
    setDeleteProductId(null); loadAll();
  };

  const addLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/admin/api/leads`, { method: "POST", headers: headers(), body: JSON.stringify({ ...newLead, revenue: Number(newLead.revenue) || 0 }) });
      const data = await res.json();
      if (data.success) { setLeadMsg("success"); setNewLead({ name: "", email: "", phone: "", company: "", source: "Manual", status: "New", notes: "", revenue: "" }); loadAll(); setTimeout(() => setLeadMsg(""), 3000); }
    } catch { setLeadMsg("error"); }
  };

  const updateLead = async (field: Partial<Lead>, id: string) => {
    await fetch(`${API}/admin/api/leads/${id}`, { method: "PUT", headers: headers(), body: JSON.stringify(field) });
    loadAll();
  };

  const deleteLead = async (id: string) => {
    await fetch(`${API}/admin/api/leads/${id}`, { method: "DELETE", headers: headers() });
    loadAll();
  };

  const logout = () => { localStorage.removeItem("admin_token"); router.push("/admin"); };
  if (!token) return null;

  const pipelineStages = [
    { label: "New", color: "bg-blue-500", leads: leads.filter(l => l.status === "New") },
    { label: "Connected", color: "bg-amber-500", leads: leads.filter(l => l.status === "Connected") },
    { label: "Converted", color: "bg-emerald-500", leads: leads.filter(l => l.status === "Converted") },
    { label: "Lost", color: "bg-red-400", leads: leads.filter(l => l.status === "Lost") },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-56 bg-slate-900 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}>
        <div className="px-4 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0">M</div>
            <div><p className="font-semibold text-white text-sm">Meerab Enterprises</p><p className="text-slate-400 text-xs">Admin Panel</p></div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === item.id ? "bg-indigo-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-4 border-t border-slate-800 pt-3">
          <button onClick={logout} className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-all">Logout</button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-slate-500 text-xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h1 className="font-semibold text-slate-800 text-sm">{navItems.find(n => n.id === activeTab)?.label}</h1>
              <p className="text-slate-400 text-xs">{new Date().toLocaleDateString("en-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </div>
          <button onClick={loadAll} className="text-xs text-indigo-500 hover:underline mr-3 hidden sm:block">Refresh</button>
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">A</div>
        </header>

        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { label: "Messages", value: contacts.length, color: "text-blue-600", bg: "bg-blue-50", tab: "inbox" },
                  { label: "Products", value: products.length, color: "text-emerald-600", bg: "bg-emerald-50", tab: "products" },
                  { label: "Total Leads", value: leadStats?.total ?? 0, color: "text-indigo-600", bg: "bg-indigo-50", tab: "leads" },
                  { label: "Converted", value: leadStats?.converted ?? 0, color: "text-emerald-600", bg: "bg-emerald-50", tab: "conversions" },
                  { label: "Visitors", value: trafficStats?.total ?? 0, color: "text-purple-600", bg: "bg-purple-50", tab: "traffic" },
                  { label: "Today", value: trafficStats?.todayCount ?? 0, color: "text-amber-600", bg: "bg-amber-50", tab: "traffic" },
                ].map((s, i) => (
                  <button key={i} onClick={() => setActiveTab(s.tab)} className={`${s.bg} rounded-xl p-3 text-left hover:opacity-80 transition`}>
                    <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                  </button>
                ))}
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 text-white">
                <p className="text-emerald-100 text-sm mb-1">Total Revenue</p>
                <p className="text-3xl font-bold">Rs. {(leadStats?.totalRevenue ?? 0).toLocaleString()}</p>
                <p className="text-emerald-200 text-xs mt-1">{leadStats?.converted ?? 0} deals closed</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
                    <p className="font-semibold text-slate-800 text-sm">Recent Messages</p>
                    <button onClick={() => setActiveTab("inbox")} className="text-xs text-indigo-500 hover:underline">View all</button>
                  </div>
                  {contacts.slice(0, 4).map((c) => (
                    <div key={c._id} className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50">
                      <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-xs flex-shrink-0">{c.name.charAt(0).toUpperCase()}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate">{c.name}</p>
                        <p className="text-xs text-slate-500 truncate">{c.message}</p>
                      </div>
                      <p className="text-xs text-slate-400 flex-shrink-0">{new Date(c.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                  {contacts.length === 0 && <p className="px-5 py-6 text-sm text-slate-400 text-center">Koi message nahi.</p>}
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-800 text-sm mb-4">Pipeline</p>
                  <div className="grid grid-cols-4 gap-2">
                    {pipelineStages.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className={`${s.color} text-white rounded-xl py-3`}>
                          <p className="text-2xl font-bold">{s.leads.length}</p>
                        </div>
                        <p className="text-xs text-slate-500 mt-1.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT INBOX */}
          {activeTab === "inbox" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div><h2 className="font-semibold text-slate-800">Contact Inbox</h2><p className="text-slate-400 text-xs">{contacts.length} messages</p></div>
                <button onClick={loadAll} className="text-xs text-indigo-500 hover:underline">Refresh</button>
              </div>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c._id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 transition">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold flex-shrink-0">{c.name.charAt(0).toUpperCase()}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{c.name}</p>
                            <p className="text-indigo-500 text-xs">{c.email}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xs text-slate-400">{new Date(c.createdAt).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}</p>
                            <a href={`mailto:${c.email}?subject=Re: Meerab Enterprises Inquiry`} className="inline-block mt-1.5 text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-100 transition">Reply</a>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{c.message}</p>
                        <button onClick={() => { setNewLead({ ...newLead, name: c.name, email: c.email }); setActiveTab("leads"); }}
                          className="mt-2 text-xs text-emerald-600 hover:underline font-medium">+ Lead mein add karo →</button>
                      </div>
                    </div>
                  </div>
                ))}
                {contacts.length === 0 && <div className="bg-white rounded-2xl border border-slate-200 py-16 text-center"><p className="text-slate-400 text-sm">Koi message nahi abhi.</p></div>}
              </div>
            </div>
          )}

          {/* LEADS */}
          {activeTab === "leads" && (
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-100"><p className="font-semibold text-slate-800 text-sm">Naya Lead Add Karo</p></div>
                <div className="p-5">
                  {leadMsg === "success" && <div className="mb-3 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm">✅ Lead add ho gaya!</div>}
                  {leadMsg === "error" && <div className="mb-3 px-3 py-2 bg-red-50 text-red-600 rounded-xl text-sm">❌ Error — dobara try karo.</div>}
                  <form onSubmit={addLead} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { key: "name", label: "Name *", placeholder: "Ali Khan" },
                      { key: "email", label: "Email", placeholder: "ali@example.com" },
                      { key: "phone", label: "Phone", placeholder: "+92 300 1234567" },
                      { key: "company", label: "Company", placeholder: "XYZ Pvt Ltd" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-xs font-medium text-slate-600 mb-1">{f.label}</label>
                        <input type="text" value={(newLead as Record<string, string>)[f.key]} onChange={(e) => setNewLead({ ...newLead, [f.key]: e.target.value })}
                          placeholder={f.placeholder} required={f.key === "name"}
                          className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Source</label>
                      <select value={newLead.source} onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option>Manual</option><option>Apollo</option><option>Form</option><option>WhatsApp</option><option>Referral</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Status</label>
                      <select value={newLead.status} onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option>New</option><option>Connected</option><option>Converted</option><option>Lost</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-3">
                      <label className="block text-xs font-medium text-slate-600 mb-1">Notes</label>
                      <input type="text" value={newLead.notes} onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                        placeholder="Koi note..." className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div><button type="submit" className="bg-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-600 transition">Add Lead</button></div>
                  </form>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-100"><p className="font-semibold text-slate-800 text-sm">{leads.length} Leads</p></div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead><tr className="bg-slate-50 text-xs text-slate-500 uppercase">
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Contact</th>
                      <th className="px-4 py-3 text-left">Source</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Notes</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {leads.map((l) => (
                        <tr key={l._id} className="hover:bg-slate-50">
                          <td className="px-4 py-3"><p className="text-sm font-medium text-slate-800">{l.name}</p><p className="text-xs text-slate-400">{l.company}</p></td>
                          <td className="px-4 py-3"><p className="text-xs text-slate-600">{l.email}</p><p className="text-xs text-slate-400">{l.phone}</p></td>
                          <td className="px-4 py-3"><span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{SOURCE_ICONS[l.source] || "📌"} {l.source}</span></td>
                          <td className="px-4 py-3">
                            <select value={l.status} onChange={(e) => updateLead({ status: e.target.value }, l._id)}
                              className={`text-xs px-2 py-1 rounded-full border-0 cursor-pointer font-medium ${STATUS_COLORS[l.status]}`}>
                              <option>New</option><option>Connected</option><option>Converted</option><option>Lost</option>
                            </select>
                          </td>
                          <td className="px-4 py-3"><p className="text-xs text-slate-500 max-w-32 truncate">{l.notes || "—"}</p></td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <button onClick={() => setEditingLead({ ...l })} className="text-xs text-indigo-500 hover:underline">Edit</button>
                              <button onClick={() => deleteLead(l._id)} className="text-xs text-red-400 hover:underline">Del</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {leads.length === 0 && <p className="text-center py-8 text-slate-400 text-sm">Koi lead nahi abhi.</p>}
                </div>
              </div>
            </div>
          )}

          {/* PIPELINE */}
          {activeTab === "pipeline" && (
            <div className="space-y-5">
              <h2 className="font-semibold text-slate-800">Lead Pipeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pipelineStages.map((stage) => (
                  <div key={stage.label} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className={`${stage.color} px-4 py-3 flex items-center justify-between`}>
                      <p className="font-semibold text-white text-sm">{stage.label}</p>
                      <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">{stage.leads.length}</span>
                    </div>
                    <div className="p-3 space-y-2 min-h-40">
                      {stage.leads.map((l) => (
                        <div key={l._id} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="font-medium text-slate-800 text-xs">{l.name}</p>
                          <p className="text-slate-500 text-xs">{l.company || l.email}</p>
                          <p className="text-xs mt-1">{SOURCE_ICONS[l.source] || "📌"} <span className="text-slate-400">{l.source}</span></p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {["New", "Connected", "Converted", "Lost"].filter(s => s !== stage.label).map((s) => (
                              <button key={s} onClick={() => updateLead({ status: s }, l._id)}
                                className="text-xs bg-white border border-slate-200 text-slate-500 px-1.5 py-0.5 rounded hover:bg-indigo-50 hover:text-indigo-600 transition">
                                → {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                      {stage.leads.length === 0 && <p className="text-center text-slate-300 text-xs py-6">Koi lead nahi</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONVERSIONS */}
          {activeTab === "conversions" && (
            <div className="space-y-5">
              <h2 className="font-semibold text-slate-800">Conversions & Revenue</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Total Leads", value: leadStats?.total ?? 0, color: "text-slate-700", bg: "bg-white" },
                  { label: "Converted", value: leadStats?.converted ?? 0, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { label: "Lost", value: leadStats?.lost ?? 0, color: "text-red-500", bg: "bg-red-50" },
                  { label: "Conversion Rate", value: leadStats?.total ? `${Math.round((leadStats.converted / leadStats.total) * 100)}%` : "0%", color: "text-indigo-600", bg: "bg-indigo-50" },
                ].map((s, i) => (
                  <div key={i} className={`${s.bg} rounded-2xl border border-slate-200 p-4`}>
                    <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                <p className="text-emerald-100 text-sm mb-2">Total Revenue</p>
                <p className="text-4xl font-bold">Rs. {(leadStats?.totalRevenue ?? 0).toLocaleString()}</p>
                <p className="text-emerald-200 text-sm mt-2">From {leadStats?.converted ?? 0} converted deals</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-100"><p className="font-semibold text-slate-800 text-sm">Converted Leads</p></div>
                <div className="divide-y divide-slate-50">
                  {leads.filter(l => l.status === "Converted").map((l) => (
                    <div key={l._id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-50">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-semibold text-xs flex-shrink-0">{l.name.charAt(0).toUpperCase()}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-slate-800">{l.name}</p>
                        <p className="text-xs text-slate-500">{l.company || l.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600 text-sm">Rs. {Number(l.revenue).toLocaleString()}</p>
                        <button onClick={() => setEditingLead({ ...l })} className="text-xs text-slate-400 hover:underline">Edit revenue</button>
                      </div>
                    </div>
                  ))}
                  {leads.filter(l => l.status === "Converted").length === 0 && <p className="px-5 py-8 text-center text-slate-400 text-sm">Koi conversion nahi abhi.</p>}
                </div>
              </div>
            </div>
          )}

          {/* TRAFFIC */}
          {activeTab === "traffic" && (
            <div className="space-y-5">
              <h2 className="font-semibold text-slate-800">Website Traffic</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <p className="text-slate-500 text-sm mb-1">Total Visitors</p>
                  <p className="text-3xl font-bold text-purple-600">{trafficStats?.total ?? 0}</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <p className="text-slate-500 text-sm mb-1">Aaj Ke Visitors</p>
                  <p className="text-3xl font-bold text-amber-600">{trafficStats?.todayCount ?? 0}</p>
                </div>
              </div>
              {/* Traffic Sources */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <p className="font-semibold text-slate-800 text-sm mb-4">Traffic Sources (Kahan Se Aaye)</p>
                {trafficStats?.sources && trafficStats.sources.length > 0 ? (
                  <div className="space-y-3">
                    {trafficStats.sources.map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-lg">{SOURCE_ICONS[s._id] || "🌐"}</span>
                        <span className="text-sm text-slate-700 flex-1">{s._id || "Direct"}</span>
                        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${Math.min(100, (s.count / (trafficStats.total || 1)) * 100)}%` }} />
                        </div>
                        <span className="text-xs font-medium text-slate-600 w-8 text-right">{s.count}</span>
                      </div>
                    ))}
                  </div>
                ) : <p className="text-slate-400 text-sm">Data nahi hai abhi.</p>}
              </div>
              {/* Top Pages */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <p className="font-semibold text-slate-800 text-sm mb-4">Top Pages</p>
                {trafficStats?.topPages && trafficStats.topPages.length > 0 ? (
                  <div className="space-y-3">
                    {trafficStats.topPages.map((page, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 w-4">{i + 1}</span>
                        <span className="text-sm text-slate-700 flex-1 truncate">{page._id || "/"}</span>
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-400 rounded-full" style={{ width: `${Math.min(100, (page.count / (trafficStats.total || 1)) * 100)}%` }} />
                        </div>
                        <span className="text-xs font-medium text-slate-600 w-6 text-right">{page.count}</span>
                      </div>
                    ))}
                  </div>
                ) : <p className="text-slate-400 text-sm">Data nahi hai abhi. Website visit karo tab aayega.</p>}
              </div>
            </div>
          )}

          {/* PRODUCTS */}
          {activeTab === "products" && (
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-100"><p className="font-semibold text-slate-800 text-sm">Naya Product Add Karo</p></div>
                <div className="p-5">
                  {productMsg === "success" && <div className="mb-3 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm">✅ Product add ho gaya!</div>}
                  {productMsg === "error" && <div className="mb-3 px-3 py-2 bg-red-50 text-red-600 rounded-xl text-sm">❌ Error — dobara try karo.</div>}
                  <form onSubmit={addProduct} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: "name", label: "Product Name *", placeholder: "Silica Gel 1GM Pouches" },
                      { key: "price", label: "Price (Rs) *", placeholder: "500", type: "number" },
                      { key: "image", label: "Image URL", placeholder: "/products/p1.jpg" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-xs font-medium text-slate-600 mb-1">{f.label}</label>
                        <input type={f.type || "text"} value={(newProduct as Record<string, string>)[f.key]} onChange={(e) => setNewProduct({ ...newProduct, [f.key]: e.target.value })}
                          placeholder={f.placeholder} required={f.key === "name" || f.key === "price"}
                          className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Category</label>
                      <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option>Desiccant</option><option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
                      <textarea value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        placeholder="Product description..." className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" rows={2} />
                    </div>
                    <div><button type="submit" className="bg-indigo-500 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-indigo-600 transition">Add Product</button></div>
                  </form>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                  <div key={p._id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-200 transition group">
                    <div className="h-36 bg-slate-100 overflow-hidden">
                      {p.image ? <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        : <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs">No Image</div>}
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">{p.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-emerald-600 font-bold">Rs. {Number(p.price).toLocaleString()}</p>
                        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{p.category}</span>
                      </div>
                      {p.description && <p className="text-slate-500 text-xs mt-1.5 line-clamp-2">{p.description}</p>}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                        <button onClick={() => setEditingProduct({ ...p })} className="flex-1 text-xs bg-indigo-50 text-indigo-600 py-1.5 rounded-lg hover:bg-indigo-100 transition">✏️ Edit</button>
                        {deleteProductId === p._id ? (
                          <div className="flex gap-1 flex-1">
                            <button onClick={() => deleteProduct(p._id)} className="flex-1 text-xs bg-red-500 text-white py-1.5 rounded-lg hover:bg-red-600 transition">Confirm</button>
                            <button onClick={() => setDeleteProductId(null)} className="flex-1 text-xs bg-slate-100 text-slate-600 py-1.5 rounded-lg transition">Cancel</button>
                          </div>
                        ) : (
                          <button onClick={() => setDeleteProductId(p._id)} className="flex-1 text-xs bg-red-50 text-red-500 py-1.5 rounded-lg hover:bg-red-100 transition">🗑️ Delete</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {products.length === 0 && <div className="sm:col-span-3 bg-white rounded-2xl border border-slate-200 py-12 text-center"><p className="text-slate-400 text-sm">Koi product nahi.</p></div>}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* EDIT PRODUCT MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Product Edit Karo</h3>
              <button onClick={() => setEditingProduct(null)} className="text-slate-400 hover:text-slate-600 text-xl leading-none">×</button>
            </div>
            <form onSubmit={updateProduct} className="space-y-3">
              {[{ key: "name", label: "Name *", type: "text" }, { key: "price", label: "Price (Rs) *", type: "number" }, { key: "image", label: "Image URL", type: "text" }].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{f.label}</label>
                  <input type={f.type} value={(editingProduct as unknown as Record<string, string>)[f.key] || ""} onChange={(e) => setEditingProduct({ ...editingProduct, [f.key]: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required={f.key === "name" || f.key === "price"} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Category</label>
                <select value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Desiccant</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
                <textarea value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" rows={3} />
              </div>
              {editingProduct.image && <img src={editingProduct.image} alt="preview" className="w-20 h-20 object-cover rounded-xl border border-slate-200" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />}
              <div className="flex gap-3 pt-1">
                <button type="submit" className="flex-1 bg-indigo-500 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-600 transition">Save</button>
                <button type="button" onClick={() => setEditingProduct(null)} className="flex-1 bg-slate-100 text-slate-700 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-200 transition">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT LEAD MODAL */}
      {editingLead && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Lead Edit Karo</h3>
              <button onClick={() => setEditingLead(null)} className="text-slate-400 hover:text-slate-600 text-xl leading-none">×</button>
            </div>
            <div className="space-y-3">
              {[{ key: "name", label: "Name" }, { key: "email", label: "Email" }, { key: "phone", label: "Phone" }, { key: "company", label: "Company" }, { key: "notes", label: "Notes" }].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{f.label}</label>
                  <input type="text" value={(editingLead as unknown as Record<string, string>)[f.key] || ""} onChange={(e) => setEditingLead({ ...editingLead, [f.key]: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Revenue (Rs)</label>
                <input type="number" value={editingLead.revenue} onChange={(e) => setEditingLead({ ...editingLead, revenue: Number(e.target.value) })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Status</label>
                <select value={editingLead.status} onChange={(e) => setEditingLead({ ...editingLead, status: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>New</option><option>Connected</option><option>Converted</option><option>Lost</option>
                </select>
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={async () => { await updateLead(editingLead, editingLead._id); setEditingLead(null); }}
                  className="flex-1 bg-indigo-500 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-600 transition">Save</button>
                <button onClick={() => setEditingLead(null)} className="flex-1 bg-slate-100 text-slate-700 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-200 transition">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}