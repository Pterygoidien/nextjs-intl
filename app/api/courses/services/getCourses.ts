export const getCourses = async () => {
    const courses =
        [
            {
                id: 1,
                title: 'Introduction to Social Media Marketing',
                description: 'This course lays the foundation of social media marketing. You’ll learn what social media marketing entails, including the history and the different social media channels that exist. You’ll learn how to select a social media channel that fits your needs, set goals and success metrics, and determine who your target audience is.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/84/89d1ab5ac1480e8a52d65e43e19bc1/Course1-logo.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'introduction-to-social-media-marketing'
            },
            {
                id: 2,
                title: 'Bookkeeping Basics',
                description: 'Learn the basics of bookkeeping and accounting. This course will teach you how to record financial transactions, prepare financial statements, and create budgets. You’ll learn how to use accounting software to manage your business finances. You’ll also learn how to use accounting information to make better business decisions.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ef/4b102147264389a1cb48f49cacc7dc/CourseraImage6.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'bookkeeping-basics'
            },
            {
                id: 3,
                title: 'Introduction to Public Speaking',
                description: 'This course will teach you how to prepare and deliver a speech. You’ll learn how to organize your ideas, design an effective presentation, and deliver your message with confidence. You’ll also learn how to manage your nervousness and speak with impact. This course is ideal for anyone who wants to improve their public speaking skills.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/6d/f47ba064c611e6b40ae537a55e6713/iStock_24181440_XLARGE_square.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'introduction-to-public-speaking'
            },
            {
                id: 4,
                title: 'Programming for Everybody (Getting Started with Python)',
                description: 'This course is designed to help non-programmers make their first steps into programming and to help experienced programmers learn Python. The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”. Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'programming-for-everybody-getting-started-with-python'
            },
            {
                id: 5,
                title: 'Leading Teams: Developing as a Leader',
                description: 'This course will help you develop the skills you need to lead a team. You’ll learn how to build a team, set goals, and manage conflict. You’ll also learn how to motivate your team and how to make decisions as a leader. This course is ideal for anyone who wants to develop their leadership skills.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/d4/71090ac9b743d5aad3d2ddfc0748b4/GIES_Icon_B.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'leading-teams-developing-as-a-leader'

            },
            {
                id: 6,
                title: 'Work Smarter with Microsoft Excel',
                description: 'This course will teach you how to use Microsoft Excel to organize and analyze data. You’ll learn how to create spreadsheets, format cells, and use formulas and functions. You’ll also learn how to create charts and graphs to visualize your data. This course is ideal for anyone who wants to learn how to use Excel to analyze data.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/e5/4c0dd713a744f89b24c72d4390601a/Excel-01.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&fit=fill&q=50',
                link: 'work-smarter-with-microsoft-excel'

            },
            {
                id: 7,
                title: 'AWS Could Technical Essentials',
                description: 'This course will teach you how to use Amazon Web Services (AWS) to host your website. You’ll learn how to create an AWS account, launch an EC2 instance, and connect to your instance using SSH. You’ll also learn how to install and configure a web server on your instance. This course is ideal for anyone who wants to learn how to use AWS to host their website.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/2abd89f8b54ad1a1805b6cdc90c341/Artboard-2.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&q=50&fit=fill',
                link: 'aws-cloud-technical-essentials'
            },
            {
                id: 8,
                title: 'Digital Transformation with Google Cloud',
                description: 'This course will teach you how to use Google Cloud to host your website. You’ll learn how to create a Google Cloud account, launch a Compute Engine instance, and connect to your instance using SSH. You’ll also learn how to install and configure a web server on your instance. This course is ideal for anyone who wants to learn how to use Google Cloud to host their website.',
                image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/a0/439b4f2cfa4b388a6ad56a21b2f994/C-DIGTRA-B_Introduction_Digital_Transformation_1200x1200_dark.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=204&q=50&fit=fill',
                link: 'digital-transformation-with-google-cloud'
            }
        ]

    return courses;
}
