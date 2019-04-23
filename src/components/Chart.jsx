import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
    return (
        <section className="Chart">
            <h1>{props.statistics.title}</h1>
            <Sparklines data={props.statistics.stats} >
                <SparklinesLine color="blue" />
            </Sparklines>
        </section>
    )
}
export default Chart;