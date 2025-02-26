class SideMenuElements {
    btnSubMenuByName = (buttonName) => { return `//li[@id='item-0']//span[text()='${buttonName}']` }
}
  
export default SideMenuElements;