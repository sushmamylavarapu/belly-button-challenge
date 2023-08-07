// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(({ names }) => {
    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });

    optionChanged();
});

const optionChanged = () => {
    let choice = d3.select('select').node().value;
    console.log(choice);

    d3.json(url).then(({ metadata, samples }) => {

        let meta = metadata.filter(obj => obj.id == choice)[0];
        let sample = samples.filter(obj => obj.id == choice)[0];

        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key, val]) => {
            d3.select('.panel-body').append('h5').text(`${key.toUpperCase()}: ${val}`)
        });
    })
};

// Bar chart





// Bubble chart