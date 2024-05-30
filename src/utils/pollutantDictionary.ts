export interface NumberDictionary {
    [key:string]: number[];
}

export const pollutantDictionary: NumberDictionary = {
    carbon_monoxide: [160, 180, 190],
    european_aqi: [25, 30, 40],
    grass_pollen: [5, 10, 20],
    nitrogen_dioxide: [5, 20, 40],
    ozone: [11, 15, 20],
    pm2_5: [5, 14, 20],
    pm10: [5, 10, 16],
    sulphur_dioxide: [5, 10, 20],
    uv_index: [1, 3, 5]
}

export interface StringDictionary {
    [key: string]: string;
}

export const pollutantNameDictionary: StringDictionary = {
    carbon_monoxide: 'Carbon Monoxide',
    european_aqi: 'European AQI',
    grass_pollen: 'Grass Pollen',
    nitrogen_dioxide: 'Nitrogen Dioxide',
    ozone: 'Ozone',
    pm2_5: 'PM2.5',
    pm10: 'PM10',
    sulphur_dioxide: 'Sulphur Dioxide',
    uv_index: 'UV Index',
}

export const pollutantDescriptionDictionary: StringDictionary = {
    carbon_monoxide: 'Carbon monoxide is a poisonous gas that can make you seriously ill if you breathe it in. Carbon monoxide can be made by fires and appliances that burn gas, wood, oil or coal.',
    european_aqi: 'European AQI',
    grass_pollen: 'Grass pollen allergy is one of the most common causes of allergy symptoms. Grass pollen allergy is also seasonal allergic rhinitis (hay fever). This affects 10 to 30% of children and adults in U.S.',
    nitrogen_dioxide: 'Nitrogen dioxide, or NO2, is a gaseous air pollutant composed of nitrogen and oxygen. NO2 forms when fossil fuels such as coal, oil, gas or diesel are burned at high temperatures.',
    ozone: "we're all going to die",
    pm2_5: 'Airborne particulate matter (PM) is not a single pollutant, but rather is a mixture of many chemical species. It is a complex mixture of solids and aerosols composed of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.',
    pm10: 'Airborne particulate matter (PM) is not a single pollutant, but rather is a mixture of many chemical species. It is a complex mixture of solids and aerosols composed of small droplets of liquid, dry solid fragments, and solid cores with liquid coatings.',
    sulphur_dioxide: 'Sulfur dioxide (IUPAC-recommended spelling) or sulphur dioxide (traditional Commonwealth English) is the chemical compound with the formula SO2. It is a toxic gas responsible for the odor of burnt matches.',
    uv_index: "The UV Index is a measure of the intensity of ultraviolet radiation from the sun at the Earth's surface. It provides important information to help people prevent overexposure to UV rays, which can lead to sunburns, premature aging of the skin, and an increased risk of skin cancer.",
}
