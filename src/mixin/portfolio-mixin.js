export default {
    data() {
        return {
            portfolios: [
                {
                    id: 1,
                    img: require(`@/assets/images/portfolio/PredictPushback.jpg`),
                    title: "Pushback to the Future: Predict Pushback Time at US Airports",
                    framework: "Lightgbm, Tensorflow, Pytorch, Scikit-learn, Pandas",
                    contributors: "Me, Kyler Robison, Trevor Tomlin, Daniil Filienko",
                    language: "Python",
                    preview: "www.tacoma.uw.edu",
                    previewLink: "https://www.tacoma.uw.edu/news/set-team-wins-national-airspace-system-competition",
                    descriptions: [
                        "• I was a member of a team that participated in an international competition organized by NASA with the objective of enhancing the accuracy of contemporary airplane departure prediction systems.",
                        "• I implemented a variety of tools that assisted the team in analyzing the data, as well as extracting crucial features from a diverse range of files that were loosely arranged. Furthermore, I am able to dramatically reduce the data preprocessing time from 10 hours to 6 hours, thanks to my prior experience working with Python and Pandas.",
                        "• I employed advanced feature engineering methodologies and contributed to the development of the model by meticulously encoding categorical features and analyzing the significance of each feature available. I also implemented scripts that utilized Optuna to fine-tune the model for minimum error. My efforts eventually led to the creation of a LightGBM model that outperformed the initial baseline model's precision by more than 50%, as verified by a dataset that was kept secret from the competitors. Because of this, our team was able to finish phase 1 in fourth place among the 49 competitors.",
                        "• During the second phase of the competition, I developed deep neural network models utilizing both PyTorch and TensorFlow, thereby enabling our team to experiment with both renowned frameworks through federated learning using Flower. By carefully analyzing and assigning data types for each feature, I am able to dramatically reduce the RAM and VRAM utilization for training the entire model. This allows my teammates to train the model without having to purchase expensive hardware.",
                        "• Receiving the School of Engineering and Technology Outstanding Undergraduate Research Award for outstanding achievement in privacy-preserving machine learning research."]
                },
                {
                    id: 2,
                    img: require(`@/assets/images/portfolio/dawnlit.png`),
                    title: "Dawn Lit",
                    framework: "Angular 16, Bootstrap, .Net 6, PostgreSQL 15",
                    contributors: "Me",
                    language: "Typescript, C#",
                    preview: "github.com",
                    previewLink: "http://dawnlit.com",
                    descriptions: [
                        "• A social media site helps people who like technology to connect and share ideas.",
                        "• Making client-server interactions flexible and scalable by adopting RESTful API design methodology.",
                        "• Following agile principles to make sure valuable features can be delivered to end users as early and frequently as possible."
                    ]
                },
                {
                    id: 3,
                    img: require(`@/assets/images/portfolio/YourProfile.webp`),
                    title: "Your Profile",
                    framework: "Tensorflow",
                    contributors: "Me, Anthony Nguyen, Brian LeSmith",
                    language: "Python",
                    preview: "github.com",
                    previewLink: "https://github.com/HuskyDevClub/YourProfile",
                    descriptions: ["• Your Profile is a collaborative course project focused on the development of a user profiling system powered by machine learning frameworks. I took on the challenge of using images as the source, while my teammates will focus on the other two sources.",
                        "• I came up with the idea of using OpenCV to first crop a person's face and then use it as the model's input. This resulted in a 74% accuracy in predicting gender, which was verified on test data that were hidden. It was already an extremely high accuracy at the time, but I am determined to do better. I have observed that OpenCV occasionally fails to extract any valid facial features from the input images. In order to resolve this issue, I used my current model as a primary model, while developing a secondary model that was trained using the original image as direct input. This secondary model was then used to predict images for which OpenCV couldn't find a recognizable face. This improved my accuracy from 74% to 78%. Nonetheless, I sincerely desired to attain an accuracy of 80%. Upon conducting an analysis, it was observed that my secondary model was having difficulty recognizing traits in the image. Therefore, I duplicated my primary model and trained it in the same manner as my secondary model. This enabled me to attain an accuracy of 80% in predicting gender at the conclusion, which was the highest accuracy in the category of visual prediction in the class.",
                        "• Since my teammates have limited experience with Python, I am also voluntarily taking on the responsibility of assembling all the models myself. Unfortunately, my teammates were only able to finalize their models and scripts until the very end, so I was forced to develop code that assembles our model in a limited amount of time. Nevertheless, the end result proved that my work was valuable. Our assembled model achieved an accuracy of 87% in predicting gender, which was the highest accuracy in the class, and only 2% below the class assembled model."]
                },
                {
                    id: 4,
                    img: require(`@/assets/images/portfolio/linpg.png`),
                    title: "Linpg Engine",
                    framework: "Pygame-ce, Numpy",
                    contributors: "Me",
                    language: "Python",
                    preview: "github.com",
                    previewLink: "https://github.com/LinpgFoundation/linpg",
                    descriptions: ["• Linpg is an advanced 2D game engine based on Pygame with the goal of standardizing the development of Pygame games and making the codes easier to read, expand, and maintain. Unlike most common Python libraries, Linpg is developed with object-oriented programming principles in mind. By providing out-of-the-box tools and components with clear type hints and necessary encapsulation, developers can easily use, inherit, and extend these features.",
                        "• Numerous commonly used APIs have been meticulously crafted to maintain a close resemblance to Pygame, thereby facilitating the seamless migration of existing Pygame projects to Linpg Engine. For developers who have no intention of migrating, Linpg also offers a diverse range of tools and components that are commonly employed in game development and can be easily integrated into one's own project.",
                        "• Pygame is sluggish when it comes to rendering visuals and text. By utilizing sophisticated algorithms at the backend to intelligently cache fonts and process images, Linpg has the ability to reduce typical rendering times by half, thereby enabling developers to provide a more satisfying gaming experience with minimal effort."]
                },
                {
                    id: 5,
                    img: require(`@/assets/images/portfolio/GFL-LastWish.png`),
                    title: " GFL - Last Wish",
                    framework: "Linpg Engine 3",
                    contributors: "Me",
                    language: "Python",
                    preview: "github.com",
                    previewLink: "https://github.com/TigeiaWorkshop/GFL-LastWish",
                    descriptions: ["• A turn-based strategy game that is not only developed with Linpg, but also with the goal of challenging the limitations of both Linpg and Pygame.",
                        "• For a considerable period of time, numerous game developers believed that Pygame was incapable of creating large and intricate games, owing to a lack of third-party support and the limitations of the Python language itself. GFL-Last Wish demonstrates that tools are never a barrier, but rather a person's capacity and willingness to succeed.",
                        "• Provide a general framework for new developers on how to build a large-scale game using Linpg, as well as a space for people to test their ideas through the workshop system."]
                },
                {
                    id: 6,
                    img: require(`@/assets/images/portfolio/SundewValley.png`),
                    title: "Sundew Valley",
                    framework: "Web Application",
                    contributors: "Me, Andrew Lau Ho YIn, Brian LeSmith, Kevin Yang",
                    language: "JavaScript",
                    preview: "huskydevclub.github.io",
                    previewLink: "https://huskydevclub.github.io/SundewValley/",
                    descriptions: ["• Leading a team of three inexperienced students to develop a game with limited time and resources.",
                        "• By utilizing the agile methodology, I am able to delegate small tasks to my colleagues every week, while simultaneously providing the requisite assistance and feedback.",
                        "• I was able to develop an advanced 2D game framework using JavaScript, thanks to my previous experience in web development. For my colleagues who are not proficient in working with JavaScript, I have also implemented API support for Tiled, a renowned map editor for indie game development. This enabled my teammates to create levels without having to work with the code.",
                        "• I am responsible for the design and implementation of the graphic user interface for the game, ensuring that it aligns with the game's theme and is comprehensible. Furthermore, I incorporated a day-night cycle system and a dynamic lighting system, which enhanced the visuals and made the game appear more realistic.",
                        "• This project provided me with the opportunity to acquire skills in providing guidance to developers who may lack experience, while simultaneously enhancing my leadership abilities."]
                },
                {
                    id: 7,
                    img: require(`@/assets/images/portfolio/DungeonAdventure.gif`),
                    title: "Dungeon Adventure",
                    framework: "Jungeon Engine",
                    contributors: "Me, Griffin Ryan, and Elijah Amian",
                    language: "Java",
                    preview: "github.com",
                    previewLink:
                        "https://github.com/HuskyDevClub/DungeonAdventure",
                    descriptions: ["• Dungeon Adventure is a 2D RPG advantage game developed using the model-view-controller (MVC) software design pattern. As an accomplished full-stack web developer, I was responsible for designing both the controller and model sections, allowing my two colleagues to concentrate on enhancing the game's visual appeal and user-friendliness.",
                        "• My experience in databases and SQL assisted me in creating a set of RESTful APIs that allow my coworkers to effortlessly save and load entities and game progress without even having to know any SQL. To combat the slow read and write times of the SQLite database, I designed a cache system that allowed my teammates to make function calls without having to worry about the performance.",
                        "• To ensure the correct functioning of the controller and model, I employ a diverse range of tests utilizing JUnit and thoroughly examine all potential edge cases."]
                },
                {
                    id: 8,
                    img: require(`@/assets/images/portfolio/A-story-of-us.png`),
                    title: " A Story of Us",
                    framework: "Linpg Engine 3",
                    contributors: "Me",
                    language: "Python",
                    preview: "github.com",
                    previewLink:
                        "https://github.com/LinpgFoundation/A-story-of-us",
                    descriptions: []
                },
                {
                    id: 9,
                    img: require(`@/assets/images/portfolio/linpgtoolbox.jpg`),
                    title: "Linpg Toolbox",
                    framework: "Cython, Pyinstaller, Twine",
                    contributors: "Me",
                    language: "Python",
                    preview: "github.com",
                    previewLink: "https://github.com/LinpgFoundation/linpg-toolbox",
                    descriptions: []
                }
            ],
        };
    },
};
