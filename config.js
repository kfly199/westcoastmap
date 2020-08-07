var config = {
    style: 'mapbox://styles/kandrewf/cjuv5jwvy2n9j1fquqdnx5a8c',
    accessToken: 'pk.eyJ1Ijoia2FuZHJld2YiLCJhIjoiY2plaXg2NjZpMDBnbzJ4bWRhY3h4OGk3biJ9.ZwCpnlMf2lLOdQMoNSJGKg',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    mapAnimation:'flyTo',
    title: 'A D-Day Story',
    subtitle: 'A story of D-Day',
    byline: 'By KA Flynn',
    footer: 'Source: source citations, etc.',
    chapters: [
      {
          id: '1-id',
          title: '160,000 civilians from Cleveland, Ohio joined the Army and Navy during World War II',
          image: 'https://case.edu/ech/sites/case.edu.ech/files/2018-05/W13.jpg',
          description: 'Some of these people took part in D-Day. This is their story.',
          location: {
              center: [-81.68502, 41.46558],
              zoom: 13.63,
              pitch: 59.00,
              bearing: 0.00
          },
          onChapterEnter: [
              // {
              //     layer: 'layer-name',
              //     opacity: 1
              // }
          ],
          onChapterExit: [
              // {
              //     layer: 'layer-name',
              //     opacity: 0
              // }
          ]
      },
      {
          id: '15-id',
          title: 'John Gabriel was at Omaha Beach on D-Day,',
          image: 'https://image.cleveland.com/home/cleve-media/width960/img/plain-dealer/photo/2015/10/26/-923c74702a3ad3e0.jpg',
          description: 'every story has details.',
          location: {
            center: [-81.68502, 41.46555],
            zoom: 14.00,
            pitch: 44.00,
            bearing: 1.00
          },
          onChapterEnter: [
              // {
              //     layer: 'layer-name',
              //     opacity: 1
              // }
          ],
          onChapterExit: [
              // {
              //     layer: 'layer-name',
              //     opacity: 0
              // }
          ]
      },
      {
            id: '2-id',
            title: 'Brooklyn, NYC',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Brooklyn_Army_Base%2C_New_York%2C_between_the_wars.png',
            description: 'Troops from the US, UK and Canada made up the majority of allied forces on D-Day. Troops from Poland, France, New Zealand and Australia also contributed to the efforts. This story is of one group of Americans who took part in D-Day.',
            location: {
                center: [-74.03298, 40.70243],
                zoom: 12.80,
                pitch: 60,
                bearing: 40.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fmid-identifier',
            title: 'Dangerous passage',
            image: 'http://www.virtualmuseum.ca/community-stories_histoires-de-chez-nous/wwii-came-to-bell-island_seconde-guerre-mondiale/wp-content/uploads/sites/95/2019/04/Shipping-U-boat-losses.jpg',
            description: 'Troops traveled across the atlantic under escort from the US, UK and Canadian Navies.',
            location: {
                center: [ -48.71740, 41.72560],
                zoom: 3.88,
                pitch: 1,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mid-identifier',
            title: 'Atlantic Ocean',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Officers_on_the_bridge.jpg',
            description: 'May 1943 was the turning point, after this month the Allies sank more enemy submarines than the Germans sank Allied ships.',
            location: {
                center: [ -38.71740, 47.72560],
                zoom: 2.88,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'other-identifier',
            title: 'Scotland',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Greenock_29May2013_Caribbean_Princess.JPG/1024px-Greenock_29May2013_Caribbean_Princess.JPG',
            description: 'Many convoys ended their voyage in Greenock, Scotland.',
            location: {
                center: [-4.94968, 55.85255],
                zoom: 9.86,
                pitch: 51,
                bearing: -12.80
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
