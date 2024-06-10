document.addEventListener('DOMContentLoaded', function() {

    const data = [
        {label: "Poland", value: 40},
        {label: "Tilted Towers", value: 55},
        {label: "Lorum Ipsum", value: 75},
        {label: "Salty Springs", value: 60},
        {label: "Moisty Mires", value: 80},
        {label: "Chorzów", value: 70}
    ];

    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const ctx = document.getElementById('barchart').getContext('2d');
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'car crashes :(',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
