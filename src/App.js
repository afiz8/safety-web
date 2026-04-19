import React, { useState, useEffect } from 'react';

// Embedded CSS - extended for new features
const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); min-height: 100vh; }
  
  .app { display: flex; min-height: 100vh; }
  .sidebar { width: 280px; background: white; box-shadow: 4px 0 20px rgba(0,0,0,0.1); padding: 2rem 0; overflow-y: auto; }
  .sidebar ul { list-style: none; }
  .sidebar li { padding: 0.75rem 2rem; cursor: pointer; transition: all 0.2s; border-left: 3px solid transparent; }
  .sidebar li:hover { background: #f1f5f9; border-left-color: #3b82f6; }
  .sidebar li.active { background: #eff6ff; border-left-color: #1d4ed8; font-weight: 600; }
  .sidebar .submenu { padding-left: 2rem; font-size: 0.9rem; }
  .sidebar .submenu li { padding: 0.5rem 2rem 0.5rem 4rem; cursor: pointer; }
  .sidebar .submenu li:hover { background: #f1f5f9; border-left-color: #3b82f6; }
  .sidebar .submenu li.active { background: #eff6ff; border-left-color: #1d4ed8; }
  
  .main { flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
  .form-card { background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); padding: 2.5rem; }
  .section { margin-bottom: 2.5rem; }
  .section h3 { color: #1e293b; margin-bottom: 1.5rem; font-size: 1.4rem; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
  .form-row { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
  .form-group { flex: 1; min-width: 200px; }
  label { display: block; margin-bottom: 0.5rem; color: #475569; font-weight: 500; }
  input, select, textarea { width: 100%; padding: 0.875rem 1rem; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 1rem; transition: all 0.2s; }
  input:focus, select:focus, textarea:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
  input[type=number] { -moz-appearance: textfield; }
  input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button, input[type=file]::-webkit-file-upload-button { -webkit-appearance: none; margin: 0; cursor: pointer; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 6px; }
  textarea { resize: vertical; min-height: 120px; font-family: inherit; }
  
  .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 2rem; border-radius: 16px; margin-top: 2rem; }
  .summary-item { text-align: center; }
  .summary-value { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.25rem; }
  .summary-label { font-size: 1.1rem; opacity: 0.95; }
  
  .radio-group { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
  .radio-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #f8fafc; border-radius: 10px; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
  .radio-item:hover { background: #e2e8f0; }
  .radio-item.active { background: #eff6ff; border-color: #3b82f6; }
  .radio-input { opacity: 0; position: absolute; }
  
  .file-preview { max-width: 300px; max-height: 200px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin-top: 1rem; display: block; }
  
  .page-nav { display: flex; gap: 1rem; margin-bottom: 2rem; }
  .nav-btn { padding: 0.75rem 2rem; background: #f1f5f9; border: none; border-radius: 10px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
  .nav-btn:hover { background: #e2e8f0; }
  .nav-btn.active { background: #3b82f6; color: white; }
  
  @media (max-width: 768px) { 
    .sidebar { width: 100%; position: fixed; height: 100vh; z-index: 100; transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main { padding: 1rem; }
    .form-row, .radio-group { flex-direction: column; }
  }
`;

// Inject CSS
const injectCSS = () => {
  if (!document.getElementById('app-styles')) {
    const style = document.createElement('style');
    style.id = 'app-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('jks'); // 'jks' | 'incidental'

  // JKS States (existing)
  const [entitas, setEntitas] = useState('');
  const [subEntitas, setSubEntitas] = useState('');
  const [site, setSite] = useState('');
  const [bulan, setBulan] = useState('');
  const [tahun, setTahun] = useState('');
  const [jumlahPekerjaOrganik, setJumlahPekerjaOrganik] = useState(0);
  const [lemburOrganik, setLemburOrganik] = useState(0);
  const [jksOrganik, setJksOrganik] = useState(0);
  const [tkjp, setTkjp] = useState(0);
  const [jksTkjp, setJksTkjp] = useState(0);
  const [jumlahPekerjaProject, setJumlahPekerjaProject] = useState(0);
  const [lemburProject, setLemburProject] = useState(0);
  const [jksProject, setJksProject] = useState(0);

  // Incidental Treatment States
  const [tipeTreatment, setTipeTreatment] = useState('FIRST-AID');
  const [entitasIt, setEntitasIt] = useState('');
  const [subEntitasIt, setSubEntitasIt] = useState('');
  const [siteIt, setSiteIt] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [kronologi, setKronologi] = useState('');
  const [foto1File /* unused intentionally for future backend upload */, setFoto1File] = useState(null);
  const [foto1Preview, setFoto1Preview] = useState('');

  // Mock data (shared)
  const entitasOptions = ['Pertamina', 'Shell', 'BP'];
  const subEntitasOptions = ['Sub A', 'Sub B'];
  const siteOptions = ['Site 1', 'Site 2'];
  const bulanOptions = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  // JKS summary
  const totalPekerja = parseFloat(jumlahPekerjaOrganik) + parseFloat(tkjp) + parseFloat(jumlahPekerjaProject);
  const totalJks = parseFloat(jksOrganik) + parseFloat(jksTkjp) + parseFloat(jksProject);
  const totalLembur = parseFloat(lemburOrganik) + parseFloat(lemburProject);

  // Handle foto preview
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto1File(file);
      setFoto1Preview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    injectCSS();
  }, []);

  const JKSForm = () => (
    <div className="form-card">
      <div className="page-nav">
        <button className={`nav-btn ${currentPage === 'jks' ? 'active' : ''}`} onClick={() => setCurrentPage('jks')}>
          Jam Kerja Selamat
        </button>
        <button className={`nav-btn ${currentPage === 'incidental' ? 'active' : ''}`} onClick={() => setCurrentPage('incidental')}>
          Incidental Treatment
        </button>
      </div>
      <h1 style={{color: '#1e293b', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800}}>Jam Kerja Selamat (JKS)</h1>
      {/* Existing JKS form sections unchanged */}
      <section className="section">
        <h3>Informasi Site</h3>
        <div className="form-row">
          <div className="form-group"><label>Entitas</label><select value={entitas} onChange={(e) => setEntitas(e.target.value)}>
            <option value="">Pilih Entitas</option>{entitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Sub Entitas</label><select value={subEntitas} onChange={(e) => setSubEntitas(e.target.value)}>
            <option value="">Pilih</option>{subEntitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Site</label><select value={site} onChange={(e) => setSite(e.target.value)}>
            <option value="">Pilih</option>{siteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Bulan</label><select value={bulan} onChange={(e) => setBulan(e.target.value)}>
            <option value="">Pilih</option>{bulanOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Tahun/Periode</label><input type="number" value={tahun} onChange={(e) => setTahun(e.target.value)} placeholder="2024" /></div>
        </div>
      </section>
      <section className="section">
        <h3>Data Organik</h3>
        <div className="form-row">
          <div className="form-group"><label>Jumlah Pekerja</label><input type="number" value={jumlahPekerjaOrganik} onChange={(e) => setJumlahPekerjaOrganik(e.target.value)} min="0" /></div>
          <div className="form-group"><label>Lembur</label><input type="number" value={lemburOrganik} onChange={(e) => setLemburOrganik(e.target.value)} min="0" /></div>
          <div className="form-group"><label>JKS Organik</label><input type="number" value={jksOrganik} onChange={(e) => setJksOrganik(e.target.value)} min="0" /></div>
        </div>
      </section>
      <section className="section">
        <h3>Data Outsource</h3>
        <div className="form-row">
          <div className="form-group"><label>TKJP</label><input type="number" value={tkjp} onChange={(e) => setTkjp(e.target.value)} min="0" /></div>
          <div className="form-group"><label>JKS TKJP</label><input type="number" value={jksTkjp} onChange={(e) => setJksTkjp(e.target.value)} min="0" /></div>
        </div>
      </section>
      <section className="section">
        <h3>Data Project</h3>
        <div className="form-row">
          <div className="form-group"><label>Jumlah Pekerja</label><input type="number" value={jumlahPekerjaProject} onChange={(e) => setJumlahPekerjaProject(e.target.value)} min="0" /></div>
          <div className="form-group"><label>Lembur</label><input type="number" value={lemburProject} onChange={(e) => setLemburProject(e.target.value)} min="0" /></div>
          <div className="form-group"><label>JKS Project</label><input type="number" value={jksProject} onChange={(e) => setJksProject(e.target.value)} min="0" /></div>
        </div>
      </section>
      <div className="summary-grid">
        <div className="summary-item"><div className="summary-value">{totalPekerja.toLocaleString()}</div><div className="summary-label">Total Pekerja</div></div>
        <div className="summary-item"><div className="summary-value">{totalJks.toLocaleString()}</div><div className="summary-label">Total JKS</div></div>
        <div className="summary-item"><div className="summary-value">{totalLembur.toLocaleString()}</div><div className="summary-label">Total Lembur</div></div>
      </div>
    </div>
  );

  const IncidentalForm = () => (
    <div className="form-card">
      <div className="page-nav">
        <button className={`nav-btn ${currentPage === 'jks' ? 'active' : ''}`} onClick={() => setCurrentPage('jks')}>Jam Kerja Selamat</button>
        <button className={`nav-btn ${currentPage === 'incidental' ? 'active' : ''}`} onClick={() => setCurrentPage('incidental')}>Incidental Treatment</button>
      </div>
      <h1 style={{color: '#1e293b', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800}}>Incidental Treatment</h1>
      
      <section className="section">
        <h3>Pilih Tipe</h3>
        <div className="radio-group">
          <label className={`radio-item ${tipeTreatment === 'FIRST-AID' ? 'active' : ''}`}>
            <input type="radio" name="tipe" value="FIRST-AID" checked={tipeTreatment === 'FIRST-AID'} onChange={(e) => setTipeTreatment(e.target.value)} className="radio-input" />
            <span>FIRST-AID</span>
          </label>
          <label className={`radio-item ${tipeTreatment === 'MEDICAL-TREATMENT' ? 'active' : ''}`}>
            <input type="radio" name="tipe" value="MEDICAL-TREATMENT" checked={tipeTreatment === 'MEDICAL-TREATMENT'} onChange={(e) => setTipeTreatment(e.target.value)} className="radio-input" />
            <span>MEDICAL-TREATMENT</span>
          </label>
        </div>
      </section>
      
      <section className="section">
        <h3>Informasi Site</h3>
        <div className="form-row">
          <div className="form-group"><label>Entitas</label><select value={entitasIt} onChange={(e) => setEntitasIt(e.target.value)}>
            <option value="">Pilih</option>{entitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Sub Entitas</label><select value={subEntitasIt} onChange={(e) => setSubEntitasIt(e.target.value)}>
            <option value="">Pilih</option>{subEntitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
          <div className="form-group"><label>Site</label><select value={siteIt} onChange={(e) => setSiteIt(e.target.value)}>
            <option value="">Pilih</option>{siteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Tanggal</label><input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} /></div>
          <div className="form-group"><label>Kronologi</label><textarea value={kronologi} onChange={(e) => setKronologi(e.target.value)} placeholder="Jelaskan kronologi kejadian..." /></div>
        </div>
      </section>
      
      <section className="section">
        <h3>File</h3>
        <div className="form-group">
          <label>File Foto 1</label>
          <input type="file" accept="image/*" onChange={handleFotoChange} />
          {foto1Preview && <img src={foto1Preview} alt="Preview" className="file-preview" />}
        </div>
      </section>
      
      <div style={{padding: '1rem', background: '#fef3c7', borderRadius: '10px', borderLeft: '4px solid #f59e0b'}}>
        <strong>Tipe:</strong> {tipeTreatment} | <strong>Preview:</strong> {foto1Preview ? 'Foto ter-upload' : 'Belum ada foto'}
      </div>
    </div>
  );

  return (
    <div className="app">
      {/* Sidebar with new menu */}
      <nav className="sidebar">
        <ul>
          <li className="active">Transaksi</li>
          <ul className="submenu">
            <li>Verifikasi Volume</li>
            <li>Dist. BBM (VHS)</li>
            <li>Dist. BBM (Franco)</li>
            <li>Asset</li>
          </ul>
          <li>HSSE
            <ul className="submenu">
              <li>Dashboard HSSE
                <ul className="submenu" style={{paddingLeft: '1rem'}}>
                  <li className={currentPage === 'jks' ? 'active' : ''} onClick={() => setCurrentPage('jks')}>Lagging Indicator
                    <ul className="submenu" style={{paddingLeft: '1rem'}}>
                      <li>Jam Kerja Selamat</li>
                    </ul>
                  </li>
                  <li>Medical Case</li>
                  <li>Pelatihan
                    <ul className="submenu" style={{paddingLeft: '1rem'}}>
                      <li>Pemadam / Evakuasi</li>
                      <li>Safe Work Practice</li>
                      <li>Refresh STK</li>
                      <li>Fleet Safety</li>
                    </ul>
                  </li>
                  <li className={currentPage === 'incidental' ? 'active' : ''} onClick={() => setCurrentPage('incidental')}>Incidental Treatment</li>
                </ul>
              </li>
              <li>Observasi</li>
              <li>Emergency Readiness</li>
              <li>Meeting/Komunikasi</li>
              <li>Logout</li>
            </ul>
          </li>
        </ul>
      </nav>
      
      {/* Conditional main content */}
      <main className="main">
        {currentPage === 'jks' ? <JKSForm /> : <IncidentalForm />}
      </main>
    </div>
  );
}

export default App;

