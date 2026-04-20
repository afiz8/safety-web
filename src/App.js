import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('jks');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // JKS Form States
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

  // JKS Data Management
  const [jksData, setJksData] = useState([]);
  const [currentJksIndex, setCurrentJksIndex] = useState(0);

  // Incidental Form States
  const [tipeTreatment, setTipeTreatment] = useState('FIRST-AID');
  const [entitasIt, setEntitasIt] = useState('');
  const [subEntitasIt, setSubEntitasIt] = useState('');
  const [siteIt, setSiteIt] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [kronologi, setKronologi] = useState('');
  const [foto1Preview, setFoto1Preview] = useState('');

  // Incidental Data Management
  const [incidentalData, setIncidentalData] = useState([]);
  const [currentIncidentalIndex, setCurrentIncidentalIndex] = useState(0);

  // Options
  const entitasOptions = ['Pertamina', 'Shell', 'BP'];
  const subEntitasOptions = ['Sub A', 'Sub B'];
  const siteOptions = ['Site 1', 'Site 2'];
  const bulanOptions = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  // JKS Calculations (live from form)
  const totalPekerja = Number(jumlahPekerjaOrganik) + Number(tkjp) + Number(jumlahPekerjaProject);
  const totalJks = Number(jksOrganik) + Number(jksTkjp) + Number(jksProject);
  const totalLembur = Number(lemburOrganik) + Number(lemburProject);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto1Preview(URL.createObjectURL(file));
    }
  };

  // JKS Submit
  const submitJks = () => {
    const data = {
      entitas,
      subEntitas,
      site,
      bulan,
      tahun,
      jumlahPekerjaOrganik,
      lemburOrganik,
      jksOrganik,
      tkjp,
      jksTkjp,
      jumlahPekerjaProject,
      lemburProject,
      jksProject,
      timestamp: new Date().toISOString()
    };
    const newData = [...jksData, data];
    setJksData(newData);
    localStorage.setItem('jksData', JSON.stringify(newData));
    // Reset form
    setEntitas('');
    setSubEntitas('');
    setSite('');
    setBulan('');
    setTahun('');
    setJumlahPekerjaOrganik(0);
    setLemburOrganik(0);
    setJksOrganik(0);
    setTkjp(0);
    setJksTkjp(0);
    setJumlahPekerjaProject(0);
    setLemburProject(0);
    setJksProject(0);
    // Go to new record
    setCurrentJksIndex(newData.length - 1);
  };

  // JKS Delete
  const deleteCurrentJks = () => {
    const newData = jksData.filter((_, index) => index !== currentJksIndex);
    setJksData(newData);
    localStorage.setItem('jksData', JSON.stringify(newData));
    // Adjust index
    const newIndex = Math.min(currentJksIndex, newData.length - 1);
    setCurrentJksIndex(newIndex);
    if (newData.length > 0) {
      // Load previous data
      const data = newData[newIndex];
      setEntitas(data.entitas || '');
      setSubEntitas(data.subEntitas || '');
      setSite(data.site || '');
      setBulan(data.bulan || '');
      setTahun(data.tahun || '');
      setJumlahPekerjaOrganik(data.jumlahPekerjaOrganik || 0);
      setLemburOrganik(data.lemburOrganik || 0);
      setJksOrganik(data.jksOrganik || 0);
      setTkjp(data.tkjp || 0);
      setJksTkjp(data.jksTkjp || 0);
      setJumlahPekerjaProject(data.jumlahPekerjaProject || 0);
      setLemburProject(data.lemburProject || 0);
      setJksProject(data.jksProject || 0);
    } else {
      // Reset form if no data
      setEntitas('');
      setSubEntitas('');
      setSite('');
      setBulan('');
      setTahun('');
      setJumlahPekerjaOrganik(0);
      setLemburOrganik(0);
      setJksOrganik(0);
      setTkjp(0);
      setJksTkjp(0);
      setJumlahPekerjaProject(0);
      setLemburProject(0);
      setJksProject(0);
    }
  };

  // JKS Navigation
  const prevJks = () => {
    if (currentJksIndex > 0) {
      const newIndex = currentJksIndex - 1;
      setCurrentJksIndex(newIndex);
      const data = jksData[newIndex];
      setEntitas(data.entitas || '');
      setSubEntitas(data.subEntitas || '');
      setSite(data.site || '');
      setBulan(data.bulan || '');
      setTahun(data.tahun || '');
      setJumlahPekerjaOrganik(data.jumlahPekerjaOrganik || 0);
      setLemburOrganik(data.lemburOrganik || 0);
      setJksOrganik(data.jksOrganik || 0);
      setTkjp(data.tkjp || 0);
      setJksTkjp(data.jksTkjp || 0);
      setJumlahPekerjaProject(data.jumlahPekerjaProject || 0);
      setLemburProject(data.lemburProject || 0);
      setJksProject(data.jksProject || 0);
    }
  };

  const nextJks = () => {
    if (currentJksIndex < jksData.length - 1) {
      const newIndex = currentJksIndex + 1;
      setCurrentJksIndex(newIndex);
      const data = jksData[newIndex];
      setEntitas(data.entitas || '');
      setSubEntitas(data.subEntitas || '');
      setSite(data.site || '');
      setBulan(data.bulan || '');
      setTahun(data.tahun || '');
      setJumlahPekerjaOrganik(data.jumlahPekerjaOrganik || 0);
      setLemburOrganik(data.lemburOrganik || 0);
      setJksOrganik(data.jksOrganik || 0);
      setTkjp(data.tkjp || 0);
      setJksTkjp(data.jksTkjp || 0);
      setJumlahPekerjaProject(data.jumlahPekerjaProject || 0);
      setLemburProject(data.lemburProject || 0);
      setJksProject(data.jksProject || 0);
    }
  };

  // Incidental Submit
  const submitIncidental = () => {
    const data = {
      tipeTreatment,
      entitasIt,
      subEntitasIt,
      siteIt,
      tanggal,
      kronologi,
      fotoPreview: foto1Preview ? 'Foto ter-upload' : 'No photo',
      timestamp: new Date().toISOString()
    };
    const newData = [...incidentalData, data];
    setIncidentalData(newData);
    localStorage.setItem('incidentalData', JSON.stringify(newData));
    // Reset form
    setTipeTreatment('FIRST-AID');
    setEntitasIt('');
    setSubEntitasIt('');
    setSiteIt('');
    setTanggal('');
    setKronologi('');
    setFoto1Preview('');
    // Go to new record
    setCurrentIncidentalIndex(newData.length - 1);
  };

  // Incidental Delete
  const deleteCurrentIncidental = () => {
    const newData = incidentalData.filter((_, index) => index !== currentIncidentalIndex);
    setIncidentalData(newData);
    localStorage.setItem('incidentalData', JSON.stringify(newData));
    const newIndex = Math.min(currentIncidentalIndex, newData.length - 1);
    setCurrentIncidentalIndex(newIndex);
    if (newData.length > 0) {
      const data = newData[newIndex];
      setTipeTreatment(data.tipeTreatment || 'FIRST-AID');
      setEntitasIt(data.entitasIt || '');
      setSubEntitasIt(data.subEntitasIt || '');
      setSiteIt(data.siteIt || '');
      setTanggal(data.tanggal || '');
      setKronologi(data.kronologi || '');
      setFoto1Preview(data.fotoPreview || '');
    } else {
      setTipeTreatment('FIRST-AID');
      setEntitasIt('');
      setSubEntitasIt('');
      setSiteIt('');
      setTanggal('');
      setKronologi('');
      setFoto1Preview('');
    }
  };

  // Incidental Navigation
  const prevIncidental = () => {
    if (currentIncidentalIndex > 0) {
      const newIndex = currentIncidentalIndex - 1;
      setCurrentIncidentalIndex(newIndex);
      const data = incidentalData[newIndex];
      setTipeTreatment(data.tipeTreatment || 'FIRST-AID');
      setEntitasIt(data.entitasIt || '');
      setSubEntitasIt(data.subEntitasIt || '');
      setSiteIt(data.siteIt || '');
      setTanggal(data.tanggal || '');
      setKronologi(data.kronologi || '');
      setFoto1Preview(data.fotoPreview || '');
    }
  };

  const nextIncidental = () => {
    if (currentIncidentalIndex < incidentalData.length - 1) {
      const newIndex = currentIncidentalIndex + 1;
      setCurrentIncidentalIndex(newIndex);
      const data = incidentalData[newIndex];
      setTipeTreatment(data.tipeTreatment || 'FIRST-AID');
      setEntitasIt(data.entitasIt || '');
      setSubEntitasIt(data.subEntitasIt || '');
      setSiteIt(data.siteIt || '');
      setTanggal(data.tanggal || '');
      setKronologi(data.kronologi || '');
      setFoto1Preview(data.fotoPreview || '');
    }
  };

  // Load data on mount
  useEffect(() => {
    const savedJks = localStorage.getItem('jksData');
    if (savedJks) {
      const parsed = JSON.parse(savedJks);
      setJksData(parsed);
      if (parsed.length > 0 && currentJksIndex < parsed.length) {
        const data = parsed[currentJksIndex];
        setEntitas(data.entitas || '');
        setSubEntitas(data.subEntitas || '');
        setSite(data.site || '');
        setBulan(data.bulan || '');
        setTahun(data.tahun || '');
        setJumlahPekerjaOrganik(data.jumlahPekerjaOrganik || 0);
        setLemburOrganik(data.lemburOrganik || 0);
        setJksOrganik(data.jksOrganik || 0);
        setTkjp(data.tkjp || 0);
        setJksTkjp(data.jksTkjp || 0);
        setJumlahPekerjaProject(data.jumlahPekerjaProject || 0);
        setLemburProject(data.lemburProject || 0);
        setJksProject(data.jksProject || 0);
      }
    }
  }, []);

  useEffect(() => {
    const savedIncidental = localStorage.getItem('incidentalData');
    if (savedIncidental) {
      const parsed = JSON.parse(savedIncidental);
      setIncidentalData(parsed);
      if (parsed.length > 0 && currentIncidentalIndex < parsed.length) {
        const data = parsed[currentIncidentalIndex];
        setTipeTreatment(data.tipeTreatment || 'FIRST-AID');
        setEntitasIt(data.entitasIt || '');
        setSubEntitasIt(data.subEntitasIt || '');
        setSiteIt(data.siteIt || '');
        setTanggal(data.tanggal || '');
        setKronologi(data.kronologi || '');
        setFoto1Preview(data.fotoPreview || '');
      }
    }
  }, []);

  const JKSForm = () => (
    <div className="form-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl relative">
      {/* Delete Button */}
      <button 
        onClick={deleteCurrentJks}
        className="absolute top-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all font-bold text-xl z-10"
        title="Hapus Data Saat Ini"
        disabled={jksData.length === 0}
      >
        ×
      </button>

      {/* Page Nav */}
      <div className="page-nav flex gap-4 mb-8">
        <button className={`nav-btn px-8 py-3 rounded-2xl font-semibold transition-all bg-gray-700/50 border-2 border-gray-600 hover:bg-gray-600 hover:border-blue-500 active:bg-blue-500 text-white ${currentPage === 'jks' ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/25' : ''}`} onClick={() => setCurrentPage('jks')}>
          Jam Kerja Selamat
        </button>
        <button className={`nav-btn px-8 py-3 rounded-2xl font-semibold transition-all bg-gray-700/50 border-2 border-gray-600 hover:bg-gray-600 hover:border-blue-500 active:bg-blue-500 text-white ${currentPage === 'incidental' ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/25' : ''}`} onClick={() => setCurrentPage('incidental')}>
          Incidental Treatment
        </button>
      </div>

      <h1 className="text-4xl font-black text-white mb-8 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
        Jam Kerja Selamat (JKS)
      </h1>

      {/* Full JKS Form - all fields */}
      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Informasi Site</h3>
        <div className="form-row flex gap-6 flex-wrap mb-4 [&>*]:min-w-[220px]">
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Entitas</label>
            <select 
              value={entitas} 
              onChange={(e) => setEntitas(e.target.value)}
              className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70"
            >
              <option value="">Pilih Entitas</option>
              {entitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Repeat all other JKS fields exactly as before... */}
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Sub Entitas</label>
            <select value={subEntitas} onChange={(e) => setSubEntitas(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {subEntitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Site</label>
            <select value={site} onChange={(e) => setSite(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {siteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Bulan</label>
            <select value={bulan} onChange={(e) => setBulan(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {bulanOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Tahun/Periode</label>
            <input type="number" value={tahun} onChange={(e) => setTahun(e.target.value)} placeholder="2024" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
        </div>
      </section>

      {/* Data Organik, Outsource, Project sections - all inputs unchanged */}
      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Data Organik</h3>
        <div className="form-row flex gap-6 flex-wrap [&>*]:min-w-[200px]">
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Jumlah Pekerja</label>
            <input type="number" value={jumlahPekerjaOrganik} onChange={(e) => setJumlahPekerjaOrganik(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Lembur</label>
            <input type="number" value={lemburOrganik} onChange={(e) => setLemburOrganik(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">JKS Organik</label>
            <input type="number" value={jksOrganik} onChange={(e) => setJksOrganik(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
        </div>
      </section>

      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Data Outsource</h3>
        <div className="form-row flex gap-6 flex-wrap [&>*]:min-w-[200px]">
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">TKJP</label>
            <input type="number" value={tkjp} onChange={(e) => setTkjp(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">JKS TKJP</label>
            <input type="number" value={jksTkjp} onChange={(e) => setJksTkjp(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
        </div>
      </section>

      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Data Project</h3>
        <div className="form-row flex gap-6 flex-wrap [&>*]:min-w-[200px]">
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Jumlah Pekerja</label>
            <input type="number" value={jumlahPekerjaProject} onChange={(e) => setJumlahPekerjaProject(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Lembur</label>
            <input type="number" value={lemburProject} onChange={(e) => setLemburProject(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
          <div className="form-group flex-1 min-w-[200px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">JKS Project</label>
            <input type="number" value={jksProject} onChange={(e) => setJksProject(Number(e.target.value))} min="0" className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70 [appearance:textfield]" />
          </div>
        </div>
      </section>

      {/* Summary - live from form */}
      <div className="summary-grid grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white p-10 rounded-3xl mt-10 shadow-2xl ring-2 ring-white/20">
        <div className="text-center">
          <div className="text-5xl font-black mb-1">{totalPekerja.toLocaleString()}</div>
          <div className="text-xl opacity-95">Total Pekerja</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black mb-1">{totalJks.toLocaleString()}</div>
          <div className="text-xl opacity-95">Total JKS</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black mb-1">{totalLembur.toLocaleString()}</div>
          <div className="text-xl opacity-95">Total Lembur</div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={submitJks}
          className="px-12 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-[1.02] min-w-[200px]"
        >
          💾 Submit JKS Data
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-12 p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
        <button 
          onClick={prevJks}
          disabled={currentJksIndex === 0}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:shadow-none"
        >
          ← Previous
        </button>
        <div className="text-2xl font-bold text-white min-w-[100px] text-center">
          {jksData.length > 0 ? currentJksIndex + 1 : 0}
        </div>
        <button 
          onClick={nextJks}
          disabled={currentJksIndex === jksData.length - 1}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:shadow-none"
        >
          Next →
        </button>
        <div className="text-lg font-semibold text-gray-300">
          Total: {jksData.length}
        </div>
      </div>
    </div>
  );

  const IncidentalForm = () => (
    <div className="form-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl relative">
      {/* Delete Button */}
      <button 
        onClick={deleteCurrentIncidental}
        className="absolute top-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all font-bold text-xl z-10"
        title="Hapus Data Saat Ini"
        disabled={incidentalData.length === 0}
      >
        ×
      </button>

      {/* Page Nav */}
      <div className="page-nav flex gap-4 mb-8 flex-wrap">
        <button className={`nav-btn px-8 py-3 rounded-2xl font-semibold transition-all bg-gray-700/50 border-2 border-gray-600 hover:bg-gray-600 hover:border-blue-500 active:bg-blue-500 text-white ${currentPage === 'jks' ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/25' : ''}`} onClick={() => setCurrentPage('jks')}>
          Jam Kerja Selamat
        </button>
        <button className={`nav-btn px-8 py-3 rounded-2xl font-semibold transition-all bg-gray-700/50 border-2 border-gray-600 hover:bg-gray-600 hover:border-blue-500 active:bg-blue-500 text-white ${currentPage === 'incidental' ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/25' : ''}`} onClick={() => setCurrentPage('incidental')}>
          Incidental Treatment
        </button>
      </div>

      <h1 className="text-4xl font-black text-white mb-8 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
        Incidental Treatment
      </h1>

      {/* Full Incidental Form */}
      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Pilih Tipe</h3>
        <div className="radio-group flex gap-4 mb-6 flex-wrap">
          <label className={`radio-item flex items-center gap-2 p-4 bg-gray-700/50 rounded-2xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:bg-gray-600 hover:border-blue-500 hover:shadow-lg ${tipeTreatment === 'FIRST-AID' ? 'bg-blue-500/30 border-blue-400 shadow-lg shadow-blue-400/25 ring-2 ring-blue-400/30' : ''}`}>
            <input type="radio" name="tipe" value="FIRST-AID" checked={tipeTreatment === 'FIRST-AID'} onChange={(e) => setTipeTreatment(e.target.value)} className="radio-input opacity-0 absolute cursor-pointer peer" />
            <span className="text-lg font-medium text-white peer-checked:text-blue-200">FIRST-AID</span>
          </label>
          <label className={`radio-item flex items-center gap-2 p-4 bg-gray-700/50 rounded-2xl cursor-pointer transition-all duration-200 border-2 border-transparent hover:bg-gray-600 hover:border-blue-500 hover:shadow-lg ${tipeTreatment === 'MEDICAL-TREATMENT' ? 'bg-blue-500/30 border-blue-400 shadow-lg shadow-blue-400/25 ring-2 ring-blue-400/30' : ''}`}>
            <input type="radio" name="tipe" value="MEDICAL-TREATMENT" checked={tipeTreatment === 'MEDICAL-TREATMENT'} onChange={(e) => setTipeTreatment(e.target.value)} className="radio-input opacity-0 absolute cursor-pointer peer" />
            <span className="text-lg font-medium text-white peer-checked:text-blue-200">MEDICAL-TREATMENT</span>
          </label>
        </div>
      </section>

      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">Informasi Site</h3>
        <div className="form-row flex gap-6 flex-wrap mb-4 [&>*]:min-w-[220px]">
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Entitas</label>
            <select value={entitasIt} onChange={(e) => setEntitasIt(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {entitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Sub Entitas</label>
            <select value={subEntitasIt} onChange={(e) => setSubEntitasIt(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {subEntitasOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Site</label>
            <select value={siteIt} onChange={(e) => setSiteIt(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70">
              <option value="">Pilih</option>
              {siteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row flex gap-6 flex-wrap [&>*]:min-w-[220px]">
          <div className="form-group flex-1 min-w-[220px]">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Tanggal</label>
            <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 hover:border-gray-500 hover:bg-gray-700/70" />
          </div>
          <div className="form-group flex-1">
            <label className="block mb-2 text-gray-300 font-medium text-lg">Kronologi</label>
            <textarea value={kronologi} onChange={(e) => setKronologi(e.target.value)} placeholder="Jelaskan kronologi kejadian..." className="w-full p-4 border-2 border-gray-600 rounded-2xl text-lg transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:bg-gray-700 min-h-[140px] hover:border-gray-500 hover:bg-gray-700/70 resize-vertical" />
          </div>
        </div>
      </section>

      <section className="section mb-10">
        <h3 className="text-2xl font-bold text-white border-b-2 border-blue-800 pb-4 mb-6">File</h3>
        <div className="form-group">
          <label className="block mb-2 text-gray-300 font-medium text-lg">File Foto 1</label>
          <input type="file" accept="image/*" onChange={handleFotoChange} className="w-full p-3 border-2 border-gray-600 rounded-2xl bg-gray-700/50 text-white file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-lg file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all cursor-pointer" />
          {foto1Preview && <img src={foto1Preview} alt="Preview" className="file-preview max-w-[300px] max-h-[200px] object-cover rounded-3xl shadow-2xl mt-4 border-4 border-white/30 hover:shadow-3xl transition-shadow" />}
        </div>
      </section>

      <div className="p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl border-l-4 border-yellow-400 shadow-lg backdrop-blur-sm">
        <div className="flex flex-wrap gap-4 text-lg font-bold text-yellow-100">
          <span>Tipe: <span className="text-blue-200">{tipeTreatment}</span></span>
          <span>|</span>
          <span>Preview: <span className="text-green-200">{foto1Preview ? 'Foto ter-upload' : 'Belum ada foto'}</span></span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={submitIncidental}
          className="px-12 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-[1.02] min-w-[200px]"
        >
          💾 Submit Incidental Data
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-12 p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
        <button 
          onClick={prevIncidental}
          disabled={currentIncidentalIndex === 0}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:shadow-none"
        >
          ← Previous
        </button>
        <div className="text-2xl font-bold text-white min-w-[100px] text-center">
          {incidentalData.length > 0 ? currentIncidentalIndex + 1 : 0}
        </div>
        <button 
          onClick={nextIncidental}
          disabled={currentIncidentalIndex === incidentalData.length - 1}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:shadow-none"
        >
          Next →
        </button>
        <div className="text-lg font-semibold text-gray-300">
          Total: {incidentalData.length}
        </div>
      </div>
    </div>
  );

  // Sidebar (unchanged)
  return (
    <div className="dark min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex">
      <nav className={`sidebar w-72 bg-blue-900 text-white shadow-2xl p-8 overflow-y-auto fixed inset-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:shadow-xl transition-transform duration-300 ease-in-out backdrop-blur-sm`}>
        <button className="md:hidden mb-6 p-3 bg-blue-800/50 rounded-xl hover:bg-blue-700 transition-all text-white font-bold" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '❌' : '☰'}
        </button>
        <ul className="space-y-1 [&>li]:list-none">
          <li className="p-4 cursor-pointer rounded-xl hover:bg-blue-800/70 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-lg mb-4">
            Transaksi
          </li>
          <ul className="space-y-1 pl-4 [&>li]:list-none">
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Verifikasi Volume</li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Dist. BBM (VHS)</li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Dist. BBM (Franco)</li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Asset</li>
          </ul>
          <li className="p-4 cursor-pointer rounded-xl hover:bg-blue-800/70 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-lg mt-6 mb-4">
            HSSE
          </li>
          <ul className="space-y-1 pl-4 [&>li]:list-none">
            <li className="p-3 cursor-pointer rounded-lg bg-blue-800/30 border-l-4 border-blue-400 font-semibold text-sm transition-all duration-200">
              <div>Dashboard HSSE</div>
              <ul className="space-y-1 pl-4 mt-2 [&>li]:list-none">
                <li className={`p-2 cursor-pointer rounded-lg hover:bg-blue-700/70 border-l-4 border-transparent hover:border-blue-300 font-medium transition-all duration-200 text-xs ${currentPage === 'jks' ? 'bg-blue-700 border-blue-300 font-bold' : ''}`} onClick={() => setCurrentPage('jks')}>
                  Lagging Indicator
                  <ul className="space-y-1 pl-4 mt-1 [&>li]:list-none">
                    <li className="p-1 text-xs opacity-90 pl-4 bg-blue-800/20 rounded">Jam Kerja Selamat</li>
                  </ul>
                </li>
                <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-700/70 border-l-4 border-transparent hover:border-blue-300 font-medium transition-all duration-200 text-xs">Medical Case</li>
                <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-700/70 border-l-4 border-transparent hover:border-blue-300 font-medium transition-all duration-200 text-xs">
                  Pelatihan
                  <ul className="space-y-1 pl-4 mt-1 [&>li]:list-none">
                    <li className="p-1 text-xs opacity-90 pl-4 bg-blue-800/20 rounded">Pemadam / Evakuasi</li>
                    <li className="p-1 text-xs opacity-90 pl-4 bg-blue-800/20 rounded">Safe Work Practice</li>
                    <li className="p-1 text-xs opacity-90 pl-4 bg-blue-800/20 rounded">Refresh STK</li>
                    <li className="p-1 text-xs opacity-90 pl-4 bg-blue-800/20 rounded">Fleet Safety</li>
                  </ul>
                </li>
                <li className={`p-2 cursor-pointer rounded-lg hover:bg-blue-700/70 border-l-4 border-transparent hover:border-blue-300 font-medium transition-all duration-200 text-xs ${currentPage === 'incidental' ? 'bg-blue-700 border-blue-300 font-bold' : ''}`} onClick={() => setCurrentPage('incidental')}>
                  Incidental Treatment
                </li>
              </ul>
            </li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Observasi</li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Emergency Readiness</li>
            <li className="p-3 cursor-pointer rounded-lg hover:bg-blue-800/50 border-l-4 border-transparent hover:border-blue-400 font-medium transition-all duration-200 text-sm">Meeting/Komunikasi</li>
            <li className="p-3 text-red-300 font-medium cursor-pointer rounded-lg hover:bg-red-500/20 border-l-4 border-red-400 hover:border-red-300 transition-all duration-200">Logout</li>
          </ul>
        </ul>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="main flex-1 p-8 max-w-7xl mx-auto w-full pt-20 md:pt-0">
        {currentPage === 'jks' ? <JKSForm /> : <IncidentalForm />}
      </main>
    </div>
  );
}

export default App;

