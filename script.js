document.addEventListener('DOMContentLoaded', function() {
    
    //temp placeholder data
    const dataUS = [
        {"label": "BAC: 0.0", "value": 45769},
        {"label": "BAC: 0.1 - 0.7", "value": 2373},
        {"label": "BAC: 0.8+", "value": 12762}
    ];
    const USlabels = dataUS.map(item => item.label);
    const USvalues = dataUS.map(item => item.value);
    

    const dataUK = [
        {"label": "2016", "value": 9030},
        {"label": "2017", "value": 8600},
        {"label": "2018", "value": 8700},
        {"label": "2019", "value": 7800},
        {"label": "2020", "value": 6450},
        {"label": "2021", "value": 6740}
    ];

    const UKlabels = dataUK.map(item => item.label);
    const UKvalues = dataUK.map(item => item.value);

    const dataPL = [
        {"label": "Under the influence", "value": 2488},
        {"label": "Not under the influence", "value": 20328}
    ];

    const PLlabels = dataPL.map(item => item.label);
    const PLvalues = dataPL.map(item => item.value);

    const colors = ['#caf0f8', '#ade8f4', '#90e0ef']; 
    

    //initiate canvas and graph
    const ctx = document.getElementById('USchart').getContext('2d');
    const USChart = new Chart(ctx, {
    
        //graph properties
        type: 'pie',
        data: {
            
            labels: USlabels,
            datasets: [{
                label: 'Fatal roadside accidents in the USA in 2021',
                data: USvalues,
                backgroundColor: colors,
                borderColor: '#816C61',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                colors: {
                  enabled: true
                }
              },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    const ctx2 = document.getElementById('UKchart').getContext('2d');
    const UKChart = new Chart(ctx2, {
        //graph properties
        type: 'bar',
        data: {
            labels: UKlabels,
            datasets: [{
                label: 'Roadsides accidents in the UK 2016-2021',
                data: UKvalues,
                backgroundColor: colors,
                borderColor: '#816C61',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const ctx3 = document.getElementById('PLchart').getContext('2d');
    const PLChart = new Chart(ctx3, {
        //graph properties
        type: 'pie',
        data: {
            labels: PLlabels,
            datasets: [{
                label: 'Roadside accidents in Poland in 2021',
                data: PLvalues,
                backgroundColor: colors,
                borderColor: '#816C61',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
