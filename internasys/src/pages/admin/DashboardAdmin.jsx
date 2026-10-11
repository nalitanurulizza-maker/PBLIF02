import { useState } from "react";
import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Building2,
  FileBarChart,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
  LogOut,
  GraduationCap,
  Clock3,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  CalendarDays,
  FileCheck2,
} from "lucide-react";

import "../../styles/DashboardAdmin.css";

function DashboardAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Pengajuan Magang", icon: ClipboardList },
    { name: "Data Mahasiswa", icon: Users },
    { name: "Data Perusahaan", icon: Building2 },
    { name: "Rekap Magang", icon: FileBarChart },
  ];

  const statistics = [
    {
      title: "Data Mahasiswa",
      value: "48",
      description: "Total mahasiswa terdaftar",
      icon: Users,
      color: "blue",
    },
    {
      title: "Menunggu Verifikasi",
      value: "12",
      description: "Pengajuan perlu diperiksa",
      icon: Clock3,
      color: "orange",
    },
    {
      title: "Pengajuan Terverifikasi",
      value: "32",
      description: "Pengajuan telah disahkan",
      icon: CheckCircle2,
      color: "green",
    },
    {
      title: "Data Perusahaan",
      value: "18",
      description: "Perusahaan terdaftar",
      icon: Building2,
      color: "purple",
    },
  ];

  const pengajuan = [
    {
      id: "PGJ-001",
      nama: "Andi Pratama",
      nim: "3312511001",
      jalur: "Mandiri",
      tanggal: "10 Okt 2026",
      status: "Menunggu",
    },
    {
      id: "PGJ-002",
      nama: "Siti Nurhaliza",
      nim: "3312511002",
      jalur: "Kerja Sama",
      tanggal: "09 Okt 2026",
      status: "Terverifikasi",
    },
    {
      id: "PGJ-003",
      nama: "Rizky Ramadhan",
      nim: "3312511003",
      jalur: "Mandiri",
      tanggal: "09 Okt 2026",
      status: "Perlu Revisi",
    },
    {
      id: "PGJ-004",
      nama: "Putri Amelia",
      nim: "3312511004",
      jalur: "Kerja Sama",
      tanggal: "08 Okt 2026",
      status: "Menunggu",
    },
  ];

  const filteredPengajuan = pengajuan.filter((item) =>
    `${item.nama} ${item.nim} ${item.id} ${item.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${sidebarOpen ? "show" : ""}`}>

        <div className="admin-sidebar-brand">
          <div className="admin-brand-icon">
            <GraduationCap size={25} />
          </div>

          <div>
            <h2>InternaSys</h2>
            <span>Internship Management</span>
          </div>

          <button
            className="admin-sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Tutup menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="admin-sidebar-label">
          MENU UTAMA
        </div>

        <nav className="admin-sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`admin-menu-item ${
                  activeMenu === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActiveMenu(item.name);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-profile">
            <div className="admin-profile-avatar">
              KM
            </div>

            <div>
              <strong>Koordinator Magang</strong>
              <span>Koordinator</span>
            </div>
          </div>

          <Link to="/login" className="admin-logout">
            <LogOut size={18} />
            <span>Keluar</span>
          </Link>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="admin-main">

        {/* TOPBAR */}
        <header className="admin-topbar">

          <div className="admin-topbar-left">
            <button
              className="admin-menu-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Buka menu"
            >
              <Menu size={23} />
            </button>

            <div>
              <span className="admin-breadcrumb">
                InternaSys / Koordinator
              </span>

              <h2>{activeMenu}</h2>
            </div>
          </div>

          <div className="admin-topbar-right">

            <div className="admin-date">
              <CalendarDays size={17} />
              <span>10 Oktober 2026</span>
            </div>

            <button
              className="admin-notification"
              aria-label="Notifikasi"
              onClick={() =>
                alert("Halaman notifikasi belum diimplementasikan.")
              }
            >
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>

            <div className="admin-topbar-profile">
              <div className="admin-profile-avatar">
                KM
              </div>

              <div>
                <strong>Koordinator Magang</strong>
                <span>Administrator</span>
              </div>

              <ChevronDown size={16} />
            </div>

          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="admin-content">

          {/* WELCOME */}
          <section className="admin-welcome">

            <div>
              <div className="admin-welcome-badge">
                <span></span>
                DASHBOARD KOORDINATOR
              </div>

              <h1>Selamat Datang, Koordinator!</h1>

              <p>
                Pantau pengajuan mahasiswa bimbingan,
                lakukan verifikasi, dan kelola data magang
                melalui dashboard InternaSys.
              </p>
            </div>

            <div className="admin-welcome-illustration">
              <GraduationCap size={90} strokeWidth={1.2} />
            </div>

          </section>

          {/* STATISTICS */}
          <section className="admin-statistics">

            {statistics.map((stat) => {
              const Icon = stat.icon;

              return (
                <div className="admin-stat-card" key={stat.title}>

                  <div className="admin-stat-top">
                    <div className={`admin-stat-icon ${stat.color}`}>
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight size={18} className="admin-stat-arrow" />
                  </div>

                  <span className="admin-stat-title">
                    {stat.title}
                  </span>

                  <h2>{stat.value}</h2>

                  <p>{stat.description}</p>

                </div>
              );
            })}

          </section>

          {/* TABLE */}
          <section className="admin-table-card">

            <div className="admin-section-header">

              <div>
                <h3>Pengajuan Magang Terbaru</h3>
                <p>
                  Daftar pengajuan mahasiswa yang memilih Anda
                  sebagai Koordinator Magang.
                </p>
              </div>

              <button
                className="admin-outline-button"
                onClick={() =>
                  setActiveMenu("Pengajuan Magang")
                }
              >
                Lihat Semua
                <ArrowUpRight size={17} />
              </button>

            </div>

            <div className="admin-table-toolbar">

              <div className="admin-search">
                <Search size={18} />

                <input
                  type="search"
                  placeholder="Cari nama, NIM, atau status..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Cari pengajuan magang"
                />
              </div>

            </div>

            <div className="admin-table-wrapper">
              <table className="admin-table">

                <thead>
                  <tr>
                    <th>ID Pengajuan</th>
                    <th>Mahasiswa</th>
                    <th>Jalur Magang</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPengajuan.map((item) => (
                    <tr key={item.id}>

                      <td className="admin-id">
                        {item.id}
                      </td>

                      <td>
                        <div className="admin-student">
                          <div className="admin-student-avatar">
                            {item.nama.charAt(0)}
                          </div>

                          <div>
                            <strong>{item.nama}</strong>
                            <span>{item.nim}</span>
                          </div>
                        </div>
                      </td>

                      <td>{item.jalur}</td>

                      <td>{item.tanggal}</td>

                      <td>
                        <span
                          className={`admin-status ${
                            item.status === "Menunggu"
                              ? "pending"
                              : item.status === "Terverifikasi"
                              ? "verified"
                              : "revision"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="admin-action-button"
                          title="Lihat detail pengajuan"
                          aria-label={`Lihat pengajuan ${item.id}`}
                          onClick={() =>
                            alert(
                              "Halaman detail pengajuan belum diimplementasikan."
                            )
                          }
                        >
                          <Eye size={18} />
                        </button>
                      </td>

                    </tr>
                  ))}

                  {filteredPengajuan.length === 0 && (
                    <tr>
                      <td colSpan="6" className="admin-empty">
                        Tidak ada pengajuan yang sesuai pencarian.
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>

          </section>

          {/* BOTTOM CARDS */}
          <section className="admin-bottom-grid">

            <div className="admin-info-card">

              <div className="admin-section-header">
                <div>
                  <h3>Aktivitas Terbaru</h3>
                  <p>Ringkasan aktivitas pengajuan magang.</p>
                </div>
              </div>

              <div className="admin-activity">

                <div className="admin-activity-item">
                  <div className="admin-activity-icon blue">
                    <ClipboardList size={19} />
                  </div>

                  <div>
                    <strong>Pengajuan Baru</strong>
                    <p>
                      Andi Pratama mengirimkan pengajuan magang.
                    </p>
                    <span>10 Oktober 2026</span>
                  </div>
                </div>

                <div className="admin-activity-item">
                  <div className="admin-activity-icon green">
                    <FileCheck2 size={19} />
                  </div>

                  <div>
                    <strong>Pengajuan Terverifikasi</strong>
                    <p>
                      Pengajuan Siti Nurhaliza telah disahkan.
                    </p>
                    <span>9 Oktober 2026</span>
                  </div>
                </div>

                <div className="admin-activity-item">
                  <div className="admin-activity-icon orange">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <strong>Perlu Revisi</strong>
                    <p>
                      Dokumen Rizky Ramadhan perlu diperbaiki.
                    </p>
                    <span>9 Oktober 2026</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="admin-info-card">

              <div className="admin-section-header">
                <div>
                  <h3>Akses Cepat</h3>
                  <p>Menu yang sering digunakan.</p>
                </div>
              </div>

              <div className="admin-quick-actions">

                <button
                  onClick={() => setActiveMenu("Pengajuan Magang")}
                >
                  <div className="admin-quick-icon blue">
                    <ClipboardList size={21} />
                  </div>

                  <span>Verifikasi Pengajuan</span>
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => setActiveMenu("Data Mahasiswa")}
                >
                  <div className="admin-quick-icon green">
                    <Users size={21} />
                  </div>

                  <span>Data Mahasiswa</span>
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => setActiveMenu("Data Perusahaan")}
                >
                  <div className="admin-quick-icon purple">
                    <Building2 size={21} />
                  </div>

                  <span>Kelola Perusahaan</span>
                  <ArrowUpRight size={17} />
                </button>

              </div>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}

export default DashboardAdmin;