import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import {
  GraduationCap,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  CheckCircle2,
  Users,
  Clock3,
  Download,
  UploadCloud,
  ChevronRight,
} from "lucide-react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const features = [
    {
      icon: <FileText size={25} />,
      title: "Pendaftaran Magang",
      description:
        "Mahasiswa dapat mengajukan pendaftaran magang secara online dengan mengisi formulir dan mengunggah dokumen persyaratan.",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Verifikasi Digital",
      description:
        "Koordinator Magang dapat memeriksa dan mengesahkan pengajuan mahasiswa secara digital melalui sistem.",
    },
    {
      icon: <ClipboardCheck size={25} />,
      title: "Monitoring Pengajuan",
      description:
        "Mahasiswa dapat memantau status pengajuan dan mengetahui apabila terdapat dokumen yang perlu direvisi.",
    },
    {
      icon: <Building2 size={25} />,
      title: "Pendataan Magang",
      description:
        "Koordinator dapat mengelola informasi perusahaan serta melakukan pendataan dan rekapitulasi mahasiswa magang.",
    },
    {
      icon: <Download size={25} />,
      title: "Borang Pendaftaran",
      description:
        "Mahasiswa dapat mengunduh borang pendaftaran magang yang telah disahkan oleh Koordinator Magang.",
    },
    {
      icon: <UploadCloud size={25} />,
      title: "Konfirmasi Penerimaan",
      description:
        "Mahasiswa dapat melaporkan hasil pengajuan ke perusahaan dan mengunggah bukti penerimaan apabila diterima.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Buat Akun",
      description:
        "Mahasiswa melakukan registrasi dan login ke InternaSys.",
    },
    {
      number: "02",
      title: "Ajukan Pendaftaran",
      description:
        "Pilih jalur magang, tentukan koordinator, lengkapi formulir, dan unggah dokumen.",
    },
    {
      number: "03",
      title: "Verifikasi Pengajuan",
      description:
        "Koordinator memeriksa dan mengesahkan pengajuan mahasiswa.",
    },
    {
      number: "04",
      title: "Unduh Borang",
      description:
        "Mahasiswa mengunduh borang yang telah disahkan untuk proses pengajuan selanjutnya.",
    },
    {
      number: "05",
      title: "Laporkan Hasil Magang",
      description:
        "Setelah proses di luar sistem, mahasiswa kembali untuk melaporkan hasil penerimaan.",
    },
  ];

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <header className="home-header">
        <nav className="home-navbar">

          <Link to="/" className="home-logo" onClick={closeMenu}>
            <div className="home-logo-icon">
              <GraduationCap size={26} />
            </div>

            <div className="home-logo-text">
              <strong>InternaSys</strong>
              <span>Internship Management System</span>
            </div>
          </Link>

          <div className={`home-nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#beranda" onClick={closeMenu}>
              Beranda
            </a>

            <a href="#tentang" onClick={closeMenu}>
              Tentang
            </a>

            <a href="#fitur" onClick={closeMenu}>
              Fitur
            </a>

            <a href="#alur" onClick={closeMenu}>
              Alur Penggunaan
            </a>

            <div className="home-mobile-actions">
              <Link to="/login" onClick={closeMenu}>
                Masuk
              </Link>

              <Link to="/register" onClick={closeMenu}>
                Daftar Sekarang
              </Link>
            </div>
          </div>

          <div className="home-nav-actions">
            <Link to="/login" className="home-login-link">
              Masuk
            </Link>

            <Link to="/register" className="home-register-link">
              Daftar Sekarang
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <button
            className="home-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section id="beranda" className="home-hero">

          <div className="home-hero-content">

            <div className="home-hero-badge">
              <span className="home-badge-dot"></span>
              SISTEM INFORMASI MAGANG MAHASISWA
            </div>

            <h1>
              Kelola Proses Magang
              <br />
              Lebih <span>Mudah, Cepat,</span>
              <br />
              dan Terstruktur.
            </h1>

            <p>
              InternaSys membantu mahasiswa dan Koordinator Magang
              dalam proses pendaftaran, verifikasi, dan pendataan
              magang melalui satu platform digital yang praktis
              dan mudah digunakan.
            </p>

            <div className="home-hero-buttons">

              <Link to="/register" className="home-primary-btn">
                Mulai Sekarang
                <ArrowRight size={19} />
              </Link>

              <a href="#tentang" className="home-outline-btn">
                Pelajari Lebih Lanjut
                <ChevronRight size={19} />
              </a>

            </div>

            <div className="home-hero-info">
              <div>
                <CheckCircle2 size={18} />
                <span>Pendaftaran Online</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Verifikasi Digital</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Pendataan Terintegrasi</span>
              </div>
            </div>

          </div>

          {/* ILUSTRASI DASHBOARD */}
          <div className="home-hero-visual">

            <div className="home-preview-card">

              <div className="preview-topbar">
                <div className="preview-logo">
                  <GraduationCap size={20} />
                  <span>InternaSys</span>
                </div>

                <div className="preview-avatar">
                  M
                </div>
              </div>

              <div className="preview-content">

                <div className="preview-greeting">
                  <span>DASHBOARD MAHASISWA</span>
                  <h3>Selamat Datang!</h3>
                  <p>
                    Pantau proses pendaftaran magang Anda.
                  </p>
                </div>

                <div className="preview-stats">

                  <div className="preview-stat">
                    <div className="preview-stat-icon blue">
                      <FileText size={20} />
                    </div>

                    <span>Pengajuan</span>
                    <strong>1 Pengajuan</strong>
                  </div>

                  <div className="preview-stat">
                    <div className="preview-stat-icon green">
                      <CheckCircle2 size={20} />
                    </div>

                    <span>Status</span>
                    <strong>Terverifikasi</strong>
                  </div>

                </div>

                <div className="preview-application">

                  <div className="preview-application-header">
                    <strong>Pengajuan Magang</strong>
                    <span className="preview-status">
                      Terverifikasi
                    </span>
                  </div>

                  <div className="preview-detail">
                    <span>Jalur Magang</span>
                    <strong>Magang Mandiri</strong>
                  </div>

                  <div className="preview-detail">
                    <span>Koordinator</span>
                    <strong>Koordinator Magang</strong>
                  </div>

                  <div className="preview-detail">
                    <span>Dokumen</span>
                    <strong>Sudah Diverifikasi</strong>
                  </div>

                  <div className="preview-download">
                    <Download size={16} />
                    Unduh Borang Pendaftaran
                  </div>

                </div>

              </div>
            </div>

            <div className="home-floating-card">
              <div className="floating-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <strong>Verifikasi Digital</strong>
                <span>Pengajuan telah disahkan</span>
              </div>
            </div>

          </div>

        </section>

        {/* TENTANG */}
        <section id="tentang" className="home-about home-section">

          <div className="home-section-heading">
            <span className="home-section-label">
              MENGENAL INTERNASYS
            </span>

            <h2>
              Satu Platform untuk
              <br />
              Pengelolaan Magang
            </h2>

            <p>
              InternaSys adalah Sistem Informasi Pendaftaran
              dan Pendataan Magang Mahasiswa Berbasis Web
              yang dirancang untuk membantu proses administrasi
              magang menjadi lebih terorganisir.
            </p>
          </div>

          <div className="home-about-grid">

            <div className="home-about-card">
              <div className="home-about-icon">
                <GraduationCap size={28} />
              </div>

              <h3>Untuk Mahasiswa</h3>

              <p>
                Mempermudah mahasiswa melakukan pendaftaran,
                mengunggah dokumen, memantau status,
                dan melaporkan hasil penerimaan magang.
              </p>
            </div>

            <div className="home-about-card">
              <div className="home-about-icon">
                <Users size={28} />
              </div>

              <h3>Untuk Koordinator Magang</h3>

              <p>
                Membantu koordinator memeriksa pengajuan,
                melakukan verifikasi, mengelola data perusahaan,
                dan melihat rekapitulasi magang mahasiswa.
              </p>
            </div>

          </div>
        </section>

        {/* FITUR */}
        <section id="fitur" className="home-features home-section">

          <div className="home-section-heading">
            <span className="home-section-label">
              FITUR INTERNASYS
            </span>

            <h2>
              Fitur yang Memudahkan
              <br />
              Proses Magang
            </h2>

            <p>
              Berbagai fitur dirancang untuk mendukung
              proses pendaftaran dan pendataan magang
              secara lebih efisien.
            </p>
          </div>

          <div className="home-features-grid">
            {features.map((feature, index) => (
              <div className="home-feature-card" key={index}>

                <div className="home-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>
            ))}
          </div>

        </section>

        {/* ALUR */}
        <section id="alur" className="home-process home-section">

          <div className="home-section-heading">
            <span className="home-section-label">
              CARA KERJA INTERNASYS
            </span>

            <h2>
              Alur Penggunaan
              <br />
              yang Sederhana
            </h2>

            <p>
              Ikuti tahapan berikut untuk memulai
              proses pendaftaran magang melalui InternaSys.
            </p>
          </div>

          <div className="home-steps">
            {steps.map((step) => (
              <div className="home-step" key={step.number}>

                <div className="home-step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}
          </div>

          <div className="home-process-note">
            <Clock3 size={21} />

            <p>
              Proses pengajuan ke CDC dan perusahaan dilakukan
              di luar InternaSys. Mahasiswa kembali ke sistem
              untuk melaporkan hasil penerimaan magang.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="home-cta">

          <div className="home-cta-content">
            <span>SIAP MEMULAI?</span>

            <h2>
              Mulai Proses Magangmu
              <br />
              Bersama InternaSys
            </h2>

            <p>
              Buat akun dan gunakan layanan InternaSys
              untuk mempermudah proses pendaftaran magang.
            </p>

            <Link to="/register" className="home-cta-button">
              Buat Akun Sekarang
              <ArrowRight size={19} />
            </Link>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="home-footer">

        <div className="home-footer-content">

          <div className="home-footer-brand">
            <div className="home-footer-logo">
              <GraduationCap size={24} />
              <strong>InternaSys</strong>
            </div>

            <p>
              Sistem Informasi Pendaftaran dan Pendataan
              Magang Mahasiswa Berbasis Web.
            </p>
          </div>

          <div className="home-footer-links">
            <h4>Navigasi</h4>

            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#fitur">Fitur</a>
            <a href="#alur">Alur Penggunaan</a>
          </div>

          <div className="home-footer-links">
            <h4>Akun</h4>

            <Link to="/login">Masuk</Link>
            <Link to="/register">Daftar</Link>
          </div>

        </div>

        <div className="home-footer-bottom">
          <span>
            © 2026 InternaSys. All rights reserved.
          </span>

          <span>
            Sistem Informasi Magang Mahasiswa
          </span>
        </div>

      </footer>

    </div>
  );
}

export default Home;