import React, { useState } from 'react';

import {
	Search,
	CustomProductName,
	AtlassianNavigation,
	PrimaryButton,
} from '@atlaskit/atlassian-navigation';

const CProductHome = () => {
    return (
    <CustomProductHome
        href="/"
        iconUrl='https://lh3.googleusercontent.com/fife/AKsag4OvAX6E4l7fIgyu2zdjTs90RO3vaspzcHcq0YaSh1TjUW7BGcikOR8k91OWjpwtJ5zlqoaJBH-hvyEoX4d0BimVTp2KFkDykEuwjLCVU-cacvR22WtZ-Q4Hr_TfmvcaXNmatggdfj8lu2L2rfJsbigz2FDv9YyyfmsiA1N_s25JiDH546mR_ChZr4-oE4yFXdcBItzVtaq4mEEYRWmJObZAdqUb0dNSUbGGL5WZUyoGucnDkZ7b_0M66TQev-G7e5Gkp_LigqNzIUU2-Xoo_oH8eWziOFq7UJIIUGqrjTf-23o7iYqg8RkKkxZiXZu4CNtrAn8kzyGK_3z3l1V1GKrr8lZiB21WU0WaL-ekBDSQR3ZIFHkamaWMcTtqWMvs4wNr1MhQl3ruz00hgSFY6hFc_Kec0gHj0k2vGwvBSD0dMlc7gygmpHLX1rBUiMc7-y_ZPsN5X02OeRsXp7Dn2jwjin2YExT-U6RuFL97GianIUbfJ16NS8KJE_GcgC6jMP-GxMju4j3KRACcH0t-PlRIl_WlOFjQeTNj0KWwf724TGqJSSKLkkpms5gGYhMLF4grnxfWNHVhXwgUX7v0VUCwEoQwJ6CCIxNnjnzLRGmcaWYEJpHZk0RmAkPPViiHrS7cbJXZjUo5dLbzqihlJKDV8cQUSeh34tYlWveuUsR3VfWBo7zXZNLLsxuiLZ4utIEHaGFVaf4Xu-6HGsGnkHDFOc52jvDF9349dc4C978iHwEISq0l0Csz1z3YxK25cPGQisn74rqwsU76YArLfXy-2WTTWGlnorEZSjnETR1sK8Ngs7cuMbb6B3n61ArY4UzMPv86XI_5VkRsmC8XcNkjOj6M3KOFohQX0VSPz6QcEB6wqM_JcAbx08zQF55PYQhwOwCQiWewOp8WgZ8h5j-JG_ITv-3LKyyn5JISiauKlC9YZJ0XfnHsZsy7RpusePKEEyqOeQ=w1280-h685'
        logoUrl='https://lh3.googleusercontent.com/fife/AKsag4OvAX6E4l7fIgyu2zdjTs90RO3vaspzcHcq0YaSh1TjUW7BGcikOR8k91OWjpwtJ5zlqoaJBH-hvyEoX4d0BimVTp2KFkDykEuwjLCVU-cacvR22WtZ-Q4Hr_TfmvcaXNmatggdfj8lu2L2rfJsbigz2FDv9YyyfmsiA1N_s25JiDH546mR_ChZr4-oE4yFXdcBItzVtaq4mEEYRWmJObZAdqUb0dNSUbGGL5WZUyoGucnDkZ7b_0M66TQev-G7e5Gkp_LigqNzIUU2-Xoo_oH8eWziOFq7UJIIUGqrjTf-23o7iYqg8RkKkxZiXZu4CNtrAn8kzyGK_3z3l1V1GKrr8lZiB21WU0WaL-ekBDSQR3ZIFHkamaWMcTtqWMvs4wNr1MhQl3ruz00hgSFY6hFc_Kec0gHj0k2vGwvBSD0dMlc7gygmpHLX1rBUiMc7-y_ZPsN5X02OeRsXp7Dn2jwjin2YExT-U6RuFL97GianIUbfJ16NS8KJE_GcgC6jMP-GxMju4j3KRACcH0t-PlRIl_WlOFjQeTNj0KWwf724TGqJSSKLkkpms5gGYhMLF4grnxfWNHVhXwgUX7v0VUCwEoQwJ6CCIxNnjnzLRGmcaWYEJpHZk0RmAkPPViiHrS7cbJXZjUo5dLbzqihlJKDV8cQUSeh34tYlWveuUsR3VfWBo7zXZNLLsxuiLZ4utIEHaGFVaf4Xu-6HGsGnkHDFOc52jvDF9349dc4C978iHwEISq0l0Csz1z3YxK25cPGQisn74rqwsU76YArLfXy-2WTTWGlnorEZSjnETR1sK8Ngs7cuMbb6B3n61ArY4UzMPv86XI_5VkRsmC8XcNkjOj6M3KOFohQX0VSPz6QcEB6wqM_JcAbx08zQF55PYQhwOwCQiWewOp8WgZ8h5j-JG_ITv-3LKyyn5JISiauKlC9YZJ0XfnHsZsy7RpusePKEEyqOeQ=w1280-h685'  
    />
)}

const CSearch = () => {
    const [SearchField, SetSearchField] = useState('')
    const SearchChange = (e) => {
        SetSearchField(e.target.value)
    }

    return(
        <Search onClick={SearchChange} placeholder="Search.." tooltip="Search" label="Search" value={SearchField}/>
    )
}

const TopNav = () => (
	<AtlassianNavigation
		label="site"
		renderProductHome={CProductHome}
		primaryItems={[
			<PrimaryButton href='/'>Home</PrimaryButton>,
			<PrimaryButton href='/malware'>Malware</PrimaryButton>,
			<PrimaryButton href='/about'>About</PrimaryButton>,
		]}
		renderSearch={CSearch}
	/>
);


export default TopNav;
