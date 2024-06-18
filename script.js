document.addEventListener('DOMContentLoaded', function() {
    
    //temp placeholder data
    const dataUS2021 = [
        {"label": "BAC: 0.0", "value": 45769},
        {"label": "BAC: 0.1 - 0.7", "value": 2373},
        {"label": "BAC: 0.8+", "value": 12762}
    ];
    const USlabels = dataUS2021.map(item => item.label);
    const USvalues = dataUS2021.map(item => item.value);
    

    const dataUK2021 = [
        {"label": "2021", "value": 6740},
        {"label": "2020", "value": 6450},
        {"label": "2019", "value": 7800},
        {"label": "2018", "value": 8700},
        {"label": "2017", "value": 8600},
        {"label": "2016", "value": 9030}
    ];
    const UKlabels = dataUK2021.map(item => item.label);
    const UKvalues = dataUK2021.map(item => item.value);

    const colors = ['#caf0f8', '#ade8f4', '#90e0ef']; 
    

    //initiate canvas and graph
    const ctx = document.getElementById('barchart').getContext('2d');
    const USChart = new Chart(ctx, {
    
        //graph properties
        type: 'pie',
        data: {
            
            labels: USlabels,
            datasets: [{
                label: 'Fatal car crashes in the USA in 2021',
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
    
    const ctx2 = document.getElementById('linechart').getContext('2d');
    const lineChart = new Chart(ctx2, {
        //graph properties
        type: 'line',
        data: {
            labels: UKlabels,
            datasets: [{
                label: 'Fatal car crashes in the UK in 2021',
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
});
