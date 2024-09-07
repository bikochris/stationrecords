// Elements
const provinceSelect = document.getElementById('province');
const districtSelect = document.getElementById('district');
const stationTypeSelect = document.getElementById('stationType');
const stationNameSelect = document.getElementById('stationName');
const instrumentSelect = document.getElementById('instrument');
const maintenanceForm = document.getElementById('maintenanceForm');
const maintenanceDateInput = document.getElementById('maintenanceDate');
const recommendedDateInput = document.getElementById('recommendedDate');
const performedWorkInput = document.getElementById('performedWork');
const uploadDocumentInput = document.getElementById('uploadDocument');
const saveMaintenanceButton = document.getElementById('saveMaintenance');
const maintenanceTableWrapper = document.getElementById('maintenanceTableWrapper');
const maintenanceTableBody = document.getElementById('maintenanceRecords');
const viewStationHistoryButton = document.getElementById('viewStationHistory');

// Data
const data = {
    Kigali: {
        Gasabo: {
            ARG: ['Ndera ARG', 'Rubungo', 'Jali', 'Gikomero'],
            MRG: ['Rusororo MRG', 'Kabuga MRG'],
            AWS: ['Rusororo AWS', 'Kabuga AWS'],
            ASS: ['Rusororo ASS', 'Kabuga ASS']
        },
        Nyarugenge: {
            ARG: ['Rugunga', 'Kigali Sector', 'Gikomero', 'Butamwa/Mageragere'],
            MRG: ['Gitega MRG', 'Kimisagara MRG'],
            AWS: ['Gitega AWS', 'Kimisagara AWS'],
            ASS: ['Gitega ASS', 'Kimisagara ASS']
        },
        Kicukiro: {
            ARG: ['Masaka ARG', 'Rubirizi', 'Kanombe', 'Gahanga'],
            MRG: ['Masaka MRG', 'Masaka MRG'],
            AWS: ['Masaka AWS', 'Masaka AWS']
        }
    },
    East: {
        Rwamagana: {
            ARG: ['Nzige ARG', 'Musha ARG', 'Bicumbi', 'Gishari', 'Mwulire'],
            MRG: ['Nzige MRG', 'Musha MRG'],
            AWS: ['Rwamagana'],
        },
        Kayonza: {
            ARG: ['Kabarondo ARG', 'Rukarara', 'Akagera-Cyarubare', 'Ganini', 'Kiziguro', 'Mukarange', 'Rukara(PNILP)', 'Murama', 'Mwiri', 'Ndego', 'Rwinkwavu'],
            MRG: ['Kabarondo MRG', 'Kabarondo MRG'],
            AWS: ['Kawangire AWS', 'Kawangire AWS'],
            ASS: ['Kawangire ASS']
        },
        Ngoma: {
            ARG: ['Zaza ARG', 'Sake ARG', 'Mutenderi', 'Jarama', 'Murama'],
            MRG: ['Zaza MRG', 'Kazo MRG'],
            AWS: ['Kazo AWS'],
            ASS: ['Kazo ASS']
        },
        Kirehe: {
            ARG: ['Nyamugali ARG', 'Musaza', 'Kirehe', 'Nyarubuye', 'Gahara', 'Bukora'],
            MRG: ['Nyarubuye MRG'],
            AWS: ['Nasho-Mphanga AWS', 'Kazo AWS'],
        },
        Gatsibo: {
            ARG: ['Gasange ARG', 'Kiziguro ARG', 'Muhura', 'Nyagahanga', 'Rwimbogo', 'Ngarama', 'Kabarore'],
            MRG: ['Zaza MRG', 'Kazo MRG'],
            AWS: ['Zaza AWS', 'Kazo AWS'],
        },
        Nyagatare: {
            ARG: ['Nyakiga-karama', 'Gabiro ARG', 'Kagitumba ARG', 'Karangazi', 'Rwempasha'],
            MRG: ['Zaza MRG', 'Kazo MRG'],
            AWS: ['Nyagatare AWS'],
            ASS: ['Nyagatare']
        },
        Bugesera: {
            ARG: ['Ruhuha ARG', 'Kazo ARG'],
            MRG: ['Ruhuha'],
            AWS: ['Mayange AWS', 'Gahanga AWS'],
            ASS: ['Juru', 'Karama', 'Nyamata']
        }
    },
    North: {
        Gicumbi: {
            ARG: ['Rwesero ARG', 'Cyumba', 'Muko', 'Kabeza/Nyamiyaga', 'Mulindi-usine', 'Bwisige'],
            MRG: ['Rusororo MRG', 'Kabuga MRG'],
            AWS: ['Gicumbi AWS'],
            ASS: ['Gicumbi']
        },
        Gakenye: {
            ARG: ['Janja', 'Gakenye District', 'Cyabongo', 'Muyongwe', 'Minazi', 'Nemba', 'Ruli', 'Rushashi'],
            MRG: ['Gitega MRG', 'Kimisagara MRG'],
            AWS: ['Gitega AWS', 'Kimisagara AWS'],
        },
        Musanze: {
            ARG: ['Remera ARG', 'Shyingiro', 'Rwaza', 'Nyange', 'Musanze', 'Kinigi'],
            MRG: ['Masaka MRG', 'Masaka MRG'],
            AWS: ['Musanze-Aero'],
            ASS: ['Busogo', 'Musanze-Aero']
        },
        Rulindo: {
            ARG: ['Rusiga', 'Rulindo Parich', 'Rulindo district', 'Rukozo', 'Mugambazi', 'Kinihira', 'Cyinzuzi', 'Rutongo'],
            MRG: ['Masaka MRG', 'Masaka MRG'],
            AWS: ['Masaka AWS', 'Masaka AWS'],
        },
        Burera: {
            ARG: ['Rwerere', 'Ruhende', 'Ntaruka', 'Kinoni', 'Kagogo', 'Butaro', 'Bungwe'],
            MRG: ['Masaka MRG', 'Masaka MRG'],
            AWS: ['Masaka AWS', 'Masaka AWS'],
        }
    }
};

const instruments = {
    ARG: ['Rain Gauge Sensor', 'Regulator', 'Solar Panel', 'Support', 'Water Collector', 'Data Logger', 'Battery'],
    MRG: ['Support', 'Water Collector', 'Measuring Cylinder'],
    AWS: ['Anemometer', 'Barometer', 'Rain Gauge Sensor', 'Solar Panel', 'Data Logger', 'Battery', 'Air-Humidity sensor', 'Global solar radiation sensor', 'Direct solar radiation sensor', 'Wind vane', 'Soil temperature sensor', 'Soil moisture sensor', 'Lightning detector'],
    ASS: ['Hygrometer', 'Thermometer', 'Barograph', 'Manual rain gauge', 'Soil Thermometer at 10 cm', 'Soil Thermometer at 20 cm', 'Soil Thermometer at 50 cm', 'Soil Thermometer at 100 cm', 'Digital thermometer', 'Maximum and minimum thermometer', 'Minimum Glass thermometer', 'Evaporation piche', 'Evaporation pan', 'Hook gauge', 'Sunshine recorder', 'Stevenson screen', 'Psychrometer', 'Analogy minimum thermometer']
};

// Map abbreviations to full names
const stationTypeFullNames = {
    ARG: 'Automatic Rain Gauge',
    MRG: 'Manual Rain Gauge',
    AWS: 'Automatic Weather Station',
    ASS: 'Agrometeorological Station'
};

// Load existing records from localStorage
const loadRecordsFromStorage = () => {
    const storedRecords = localStorage.getItem('stationMaintenanceRecords');
    return storedRecords ? JSON.parse(storedRecords) : {};
};

// Save records to localStorage
const saveRecordsToStorage = (records) => {
    localStorage.setItem('stationMaintenanceRecords', JSON.stringify(records));
};

// Initialize records
let stationMaintenanceRecords = loadRecordsFromStorage();

// Event Listeners
provinceSelect.addEventListener('change', () => {
    const province = provinceSelect.value;
    districtSelect.innerHTML = '<option value="">--Select District--</option>';
    stationTypeSelect.innerHTML = '<option value="">--Select Type of Station--</option>';
    stationNameSelect.innerHTML = '<option value="">--Select Station Name--</option>';
    instrumentSelect.innerHTML = '<option value="">--Select Instrument--</option>';
    maintenanceForm.classList.add('hidden');
    maintenanceTableWrapper.classList.add('hidden');
    maintenanceTableBody.innerHTML = '';

    if (province) {
        const districts = Object.keys(data[province]);
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});

districtSelect.addEventListener('change', () => {
    const province = provinceSelect.value;
    const district = districtSelect.value;
    stationTypeSelect.innerHTML = '<option value="">--Select Type of Station--</option>';
    stationNameSelect.innerHTML = '<option value="">--Select Station Name--</option>';
    instrumentSelect.innerHTML = '<option value="">--Select Instrument--</option>';
    maintenanceForm.classList.add('hidden');
    maintenanceTableWrapper.classList.add('hidden');
    maintenanceTableBody.innerHTML = '';

    if (district) {
        const stationTypes = Object.keys(data[province][district]);
        stationTypes.forEach(stationType => {
            const option = document.createElement('option');
            option.value = stationType;
            option.textContent = stationTypeFullNames[stationType] || stationType;
            stationTypeSelect.appendChild(option);
        });
    }
});

stationTypeSelect.addEventListener('change', () => {
    const province = provinceSelect.value;
    const district = districtSelect.value;
    const stationType = stationTypeSelect.value;
    stationNameSelect.innerHTML = '<option value="">--Select Station Name--</option>';
    instrumentSelect.innerHTML = '<option value="">--Select Instrument--</option>';
    maintenanceForm.classList.add('hidden');
    maintenanceTableWrapper.classList.add('hidden');
    maintenanceTableBody.innerHTML = '';

    if (stationType) {
        const stationNames = data[province][district][stationType];
        stationNames.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            stationNameSelect.appendChild(option);
        });
    }
});

stationNameSelect.addEventListener('change', () => {
    const stationType = stationTypeSelect.value;
    const stationName = stationNameSelect.value;
    
    if (stationName) {
        maintenanceForm.classList.remove('hidden');
        viewStationHistoryButton.classList.remove('hidden');
        
        instrumentSelect.innerHTML = '<option value="">--Select Instrument--</option>';
        instruments[stationType].forEach(instrument => {
            const option = document.createElement('option');
            option.value = instrument;
            option.textContent = instrument;
            instrumentSelect.appendChild(option);
        });
    } else {
        maintenanceForm.classList.add('hidden');
        viewStationHistoryButton.classList.add('hidden');
        maintenanceTableWrapper.classList.add('hidden');
    }
});

saveMaintenanceButton.addEventListener('click', () => {
    const selectedStation = stationNameSelect.value;
    const selectedInstrument = instrumentSelect.value;
    const maintenanceDate = maintenanceDateInput.value;
    const recommendedDate = recommendedDateInput.value;
    const performedWork = performedWorkInput.value;
    const documentFile = uploadDocumentInput.files[0];

    if (!selectedStation || !maintenanceDate || !recommendedDate || !performedWork) {
        alert('Please fill in all fields and upload a document.');
        return;
    }

    const record = {
        instrument: selectedInstrument,
        maintenanceDate,
        recommendedDate,
        performedWork,
        documentFile: documentFile ? URL.createObjectURL(documentFile) : null
    };

    if (editingRecordIndex !== null) {
        // Update existing record
        stationMaintenanceRecords[selectedStation][editingRecordIndex] = record;
        editingRecordIndex = null; // Reset after saving
    } else {
        // Add new record
        if (!stationMaintenanceRecords[selectedStation]) {
            stationMaintenanceRecords[selectedStation] = [];
        }
        stationMaintenanceRecords[selectedStation].unshift(record);
    }

    saveRecordsToStorage(stationMaintenanceRecords);
    displayStationMaintenanceRecords(selectedStation);

    // Clear the form
    maintenanceDateInput.value = '';
    recommendedDateInput.value = '';
    performedWorkInput.value = '';
    uploadDocumentInput.value = '';
});

function displayStationMaintenanceRecords(station) {
    maintenanceTableBody.innerHTML = ''; // Clear the current records
    const records = stationMaintenanceRecords[station] || [];
    
    records.forEach((record, index) => {
        const newRow = document.createElement('tr');

        const instrumentCell = document.createElement('td');
        instrumentCell.textContent = record.instrument;
        newRow.appendChild(instrumentCell);

        const maintenanceDateCell = document.createElement('td');
        maintenanceDateCell.textContent = record.maintenanceDate;
        newRow.appendChild(maintenanceDateCell);

        const performedWorkCell = document.createElement('td');
        performedWorkCell.textContent = record.performedWork;
        newRow.appendChild(performedWorkCell);

        const recommendedDateCell = document.createElement('td');
        recommendedDateCell.textContent = record.recommendedDate;
        newRow.appendChild(recommendedDateCell);

        const documentCell = document.createElement('td');
        if (record.documentFile) {
            const documentLink = document.createElement('a');
            documentLink.textContent = 'View Document';
            documentLink.href = record.documentFile;
            documentLink.target = '_blank';
            documentCell.appendChild(documentLink);
        } else {
            documentCell.textContent = 'No document';
        }
        newRow.appendChild(documentCell);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editRecord(station, index));
        actionsCell.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeRecord(station, index));
        actionsCell.appendChild(removeButton);

        newRow.appendChild(actionsCell);
        maintenanceTableBody.appendChild(newRow);
    });
}

// Function to edit a record
function editRecord(station, index) {
    const record = stationMaintenanceRecords[station][index];

    instrumentSelect.value = record.instrument;
    maintenanceDateInput.value = record.maintenanceDate;
    recommendedDateInput.value = record.recommendedDate;
    performedWorkInput.value = record.performedWork;
    editingRecordIndex = index; // Set the index of the record being edited

    maintenanceForm.classList.remove('hidden'); // Ensure form is visible
}

// Function to remove a record
function removeRecord(station, index) {
    stationMaintenanceRecords[station].splice(index, 1);
    saveRecordsToStorage(stationMaintenanceRecords);
    displayStationMaintenanceRecords(station);
}

viewStationHistoryButton.addEventListener('click', () => {
    const selectedStation = stationNameSelect.value;
    if (selectedStation) {
        displayStationMaintenanceRecords(selectedStation);
        maintenanceTableWrapper.classList.remove('hidden'); // Show the table
    } else {
        alert('Please select a station.');
    }
});