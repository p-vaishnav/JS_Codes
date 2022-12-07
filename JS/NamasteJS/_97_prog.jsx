// ptcs-chart


class Chart {
    template() {
        return 
        `
            <div>
                <h1>Success</h1>
            </div>
        `;
    }

    data() {
        //  cleanse it
    }
};

// div
/*
<vaishnav></vaishnav>
<ptcs-chart></ptcs-chart>
*/

const App = () => {
    return (
        <ptcs-chart></ptcs-chart>
    );
}