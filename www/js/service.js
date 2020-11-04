angular.module('starter.services', [])

    .service('News', function () {
        var articles = [{
                "id": 1,
                "source": "Telecomtalk.info",
                "author": "Arpit Sharma",
                "title": "Trai Mandate Effect",
                "content": "There’s no doubt that the new Trai broadcasting regime will help DTH and Cable TV operators in increasing their revenue and ARPU. With the new pricing scheme coming into effect from April 1, subscribers are being moved to Best Fit.",
                "urlToImage": "https://telecomtalk.info/wp-content/uploads/2019/03/trai-mandate-effect-customer-migration.png",
                "publishedAt": "2019-04-08T06:58:17Z",
                "categories": [
                    "Business"
                ]
            },
            {
                "id": 2,
                "source": "The Times of India",
                "author": "prof X",
                "title": "India's 2019 ICC ODI World Cup squad Selection",
                "content": "Cricket News: TOI has learnt that the senior selection committee of the Board of Control for Cricket in India (BCCI) and India captain, Virat Kohli, will meet in",
                "urlToImage": "https://static.toiimg.com/thumb/msid-68773984,width-1070,height-580,imgsize-1295480,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2019-04-08T06:47:07Z",
                "categories": [
                    "Sports"
                ]
            },
            {
                "id": 3,
                "source": "Metro",
                "author": "Metro Sport Reporter",
                "title": "Champions League: Alan Shearer names his favourite to win competition",
                "content": "Premier League legend and former England striker Alan Shearer (Picture: Getty) Premier League legend Alan Shearer is backing Lionel Messi to fire Barcelona to Champions League glory this season.",
                "urlToImage": "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/04/GettyImages-1062265096_1554705600.jpg?quality=90&strip=all&w=1200&h=630&crop=1&zoom=1&ssl=1",
                "publishedAt": "2019-04-08T06:38:00Z",
                "categories": [
                    "Sports"
                ]
            },
            {
                "id": 4,
                "source": "9to5mac.com",
                "author": "mac",
                "title": "Triple-camera iPhones in 2019",
                "content": "Japanese Apple blog Macotakara is making some unorthodox claims this morning regarding the 2019 iPhone lineup. Previous rumors had indicated that the 2019 lineup would be direct successors to the 2018 iPhone XR, iPhone XS and iPhone XS Max.",
                "urlToImage": "https://9to5mac.com/wp-content/uploads/sites/6/2019/04/2019-iphone.jpg?quality=82&strip=all&w=1600",
                "publishedAt": "2019-04-08T07:26:00Z",
                "categories": [
                    "Technology",
                    "Business"
                ]
            },
            {
                "id": 5,
                "source": "Hindustantimes.com",
                "author": "Kul Bhushan",
                "title": "Samsung Galaxy A20 vs Motorola One vs Xiaomi Redmi Note 7",
                "content": "Samsung Galaxy A20 goes on sale in India on Monday. The latest budget is part of Samsung’s revamped A-series which now features improved design and more competitive specifications. Priced at Rs 12,490, Samsung Galaxy A20 will be competing with a range of budget phones",
                "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/04/08/Pictures/_678401ea-59ca-11e9-8e62-bd2fe95cd5f8.jpg",
                "publishedAt": "2019-04-08T06:49:00Z",
                "categories": [
                    "Technology"
                ]
            },
            {
                "id": 6,
                "source": "News18.com",
                "author": "News18.com",
                "title": "Priyanka Chopra Trips and Almost Falls",
                "content": "It is one of those moments that has made Nick Jonas and Priyanka Chopra one of the most watched out among the celebrity couples on social media.",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2019/02/Priyanick.jpg",
                "publishedAt": "2019-04-08T06:21:00Z",
                "categories": [
                    "Entertainment"
                ]
            },
            {
                "id": 7,
                "source": "Siasat.com",
                "author": "shameen",
                "urlToImage": 'https://i1.wp.com/www.siasat.com/wp-content/uploads/2018/10/Sunscreen-Safety.jpg?resize=800%2C426&ssl=1',
                "title": "Sunscreen use could lead to better blood vessel health",
                "content": "Washington: Sunscreen protects the skin’s blood vessel function from harmful ultraviolet radiation (UVR) exposure by protecting dilation of the blood vessels. Perspiration on the skin may also provide protection to the skin’s blood vessels from sun damage",
                "publishedAt": "2019-04-08T06:14:00Z",
                "categories": [
                    "Health"
                ]
            },
            {
                "id": 8,
                "source": "Business-standard.com",
                "author": "Press Trust of India",
                "title": "New computer-aided model may help predict sepsis",
                "content": "Scientists in the UK have developed a computer-aided model that may help predict sepsis by routinely collecting data to identify early symptoms of the life-threatening condition.Sepsis is a major cause of death in hospitals, and early detection is",
                "urlToImage": "https://img.etimg.com/thumb/msid-66332007,width-643,imgsize-799584,resizemode-4/aimedical.jpg",
                "publishedAt": "2019-04-08T07:21:06Z",
                "categories": [
                    "Health",
                    "Technology"
                ]
            },
            {
                "id": 9,
                "source": "Aninews.in",
                "author": "ani",
                "title": "Observing cells' eating habits may aid cancer diagnosis",
                "content": "Washington D.C [USA], Apr 8 (ANI): A recent research has found that if we observe what cells eat, then it may be possible to diagnose and treat diseases such as cancer.",
                "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/Cell_eating_habit.jpg",
                "publishedAt": "2019-04-08T06:49:00Z",
                "categories": [
                    "Health"
                ]
            }
        ];
    });