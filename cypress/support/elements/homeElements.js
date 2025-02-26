class HomeElements {
    btnHomeByName = (buttonName) => { return `//h5[normalize-space()='${buttonName}']` }
    btnForms = () => { return "//h5[normalize-space()='Forms']" }
    btnElements = () => { return "//h5[normalize-space()='Elements']" }
    btnAlerts = () => { return "//h5[normalize-space()='Alerts, Frame & Windows']" }
}
  
export default HomeElements;