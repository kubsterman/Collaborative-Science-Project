// THIS NEEDS A LOCAL SERVER ;( 
// import data from 'data.json' assert {type: 'json'};
//     console.log(data)

document.addEventListener('DOMContentLoaded', function() {
    
    //temp placeholder data
    const data = [
        {label: "Poland", value: 40},
        {label: "Tilted Towers", value: 55},
        {label: "Lorum Ipsum", value: 75},
        {label: "Salty Springs", value: 60},
        {label: "Moisty Mires", value: 80},
        {label: "Chorzów", value: 70}
    ];

    
    //get data
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    //initiate canvas and graph
    const ctx = document.getElementById('barchart').getContext('2d');
    const BarChart = new Chart(ctx, {
        //graph properties
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'car crashes :(',
                data: values,
                backgroundColor: '#A89B9D',
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
