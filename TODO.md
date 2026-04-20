# TODO: Add Submit/Delete/Pagination to JKS & Incidental Forms

**Information Gathered:**
- App.js: Full HSSE app w/ dashboard + JKS/Incidental forms
- JKS form data: entitas, subEntitas, site, bulan, tahun, jumlahPekerjaOrganik, lemburOrganik, jksOrganik, tkjp, jksTkjp, jumlahPekerjaProject, lemburProject, jksProject
- Incidental form data: tipeTreatment, entitasIt, subEntitasIt, siteIt, tanggal, kronologi, foto1Preview (store as URL or filename if needed)
- Summary JKS: from current form inputs (live)

**Plan:**
src/App.js (complete replace):
- Add states: jksData[], currentJksIndex, incidentalData[], currentIncidentalIndex
- useEffect localStorage load/save for each
- Submit handlers: capture form state → push to array → reset form → save → index=0
- Delete (X): remove current index → save → adjust index
- Previous/Next buttons: change index → load data to form
- UI: Add Submit btn bottom form, X btn top-right, nav "Previous [index+1] Next (Total: N)" 
- Preserve ALL existing styling/logic/dashboard

**Dependent:** None

**Followup:** npm start test, verify independent pagination/localStorage

Approve to proceed?

