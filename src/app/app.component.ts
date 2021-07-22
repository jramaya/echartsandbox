import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockServerService } from './mock-server.service';
import * as echarts from 'echarts';
import * as ecStat from 'echarts-stat/dist/ecStat.min.js';

echarts.registerTransform(ecStat.transform.clustering);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options;
  constructor(private api: MockServerService, private http: HttpClient) {
    this.options = this.setOptions();
  }

  setOptionsBasics() {
    return {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
          ],
          type: 'scatter',
        },
      ],
    };
  }

  setOptions() {
    const data = [
      [3.275154, 2.957587],
      [-3.344465, 2.603513],
      [0.355083, -3.376585],
      [1.852435, 3.547351],
      [-2.078973, 2.552013],
      [-0.993756, -0.884433],
      [2.682252, 4.007573],
      [-3.087776, 2.878713],
      [-1.565978, -1.256985],
      [2.441611, 0.444826],
      [-0.659487, 3.111284],
      [-0.459601, -2.618005],
      [2.17768, 2.387793],
      [-2.920969, 2.917485],
      [-0.028814, -4.168078],
      [3.625746, 2.119041],
      [-3.912363, 1.325108],
      [-0.551694, -2.814223],
      [2.855808, 3.483301],
      [-3.594448, 2.856651],
      [0.421993, -2.372646],
      [1.650821, 3.407572],
      [-2.082902, 3.384412],
      [-0.718809, -2.492514],
      [4.513623, 3.841029],
      [-4.822011, 4.607049],
      [-0.656297, -1.449872],
      [1.919901, 4.439368],
      [-3.287749, 3.918836],
      [-1.576936, -2.977622],
      [3.598143, 1.97597],
      [-3.977329, 4.900932],
      [-1.79108, -2.184517],
      [3.914654, 3.559303],
      [-1.910108, 4.166946],
      [-1.226597, -3.317889],
      [1.148946, 3.345138],
      [-2.113864, 3.548172],
      [0.845762, -3.589788],
      [2.629062, 3.535831],
      [-1.640717, 2.990517],
      [-1.881012, -2.485405],
      [4.606999, 3.510312],
      [-4.366462, 4.023316],
      [0.765015, -3.00127],
      [3.121904, 2.173988],
      [-4.025139, 4.65231],
      [-0.559558, -3.840539],
      [4.376754, 4.863579],
      [-1.874308, 4.032237],
      [-0.089337, -3.026809],
      [3.997787, 2.518662],
      [-3.082978, 2.884822],
      [0.845235, -3.454465],
      [1.327224, 3.358778],
      [-2.889949, 3.596178],
      [-0.966018, -2.839827],
      [2.960769, 3.079555],
      [-3.275518, 1.577068],
      [0.639276, -3.41284],
    ];

    const CLUSTER_COUNT = 4;
    const DIENSIION_CLUSTER_INDEX = 2;
    const COLOR_ALL = ['#e06343', '#37a354', '#b55dba', '#b5bd48'];
    const pieces = [];

    for (let i = 0; i < CLUSTER_COUNT; i++) {
      pieces.push({ value: i, label: 'cluster ' + i, color: COLOR_ALL[i] });
    }

    return {
      dataset: [
        { source: data },
        {
          transform: {
            type: 'ecStat:clustering',
            config: {
              clusterCount: CLUSTER_COUNT,
              outputType: 'single',
              outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX,
            },
          },
        },
      ],
      tooltip: {
        position: 'top',
      },
      visualMap: {
        type: 'piecewise',
        top: 'middle',
        min: 0,
        max: CLUSTER_COUNT,
        left: 10,
        splitNumber: CLUSTER_COUNT,
        dimension: DIENSIION_CLUSTER_INDEX,
        pieces: pieces,
      },
      grid: {
        left: 120,
      },
      xAxis: {},
      yAxis: {},
      series: {
        type: 'scatter',
        // data: data,
        encode: {
          tooltip: [0, 1],
        },
        symbolSize: 15,
        itemStyle: {
          borderColor: '#555',
        },
        datasetIndex: 1,
      },
    };
  }
}
