import sass from "@/new-portfolio/styles/sections/HomePage/About.module.scss";

const About = () => {
    return (
        <section data-scroll className={`${sass.About} mt-32 h-auto`}>
            <h2
                className={`${sass.Heading} heading-text `}
                data-scroll data-scroll-speed="-1.5"
            >
                Обо мне
            </h2>
            <div className={`${sass.Block} flexbox `}
                 data-scroll>
                <div
                    className={`${sass.Text} `}
                    data-scroll
                    data-scroll-speed="3"
                >
                    <p className={`basic-text mb-10`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        cupiditate, eaque fugiat harum illo ipsam, ipsum nobis omnis perferendis porro provident quaerat
                        sit tenetur ullam voluptatum? Debitis, dolore, eos? Ab amet deleniti dolores, libero magni natus
                        nesciunt officiis quae, quod sit suscipit temporibus ullam voluptatum! Animi debitis deleniti
                        dolor eius eligendi fuga, illo molestiae perspiciatis rem rerum? Ab ad alias dolor doloribus ex
                        exercitationem, ipsa labore maiores nobis non placeat, praesentium quidem, sunt. Animi eligendi
                        fugit laborum laudantium modi odit placeat provident ratione ut velit? Ab consequuntur deleniti,
                        ducimus eligendi eveniet fuga ipsum libero magnam molestias nostrum, nulla odit omnis,
                        praesentium repellendus soluta voluptate voluptatem! Dolores quam quas recusandae sit velit
                        voluptatum? Amet dolore esse exercitationem fugit inventore ipsum iste itaque necessitatibus
                        nesciunt obcaecati optio quaerat, sequi, suscipit ut voluptatem.</p>
                    <button className={`${sass.Btn} btn`}>Резюме</button>
                </div>

                <img
                    src="/About.png"
                    className={`${sass.img}`}
                    data-scroll
                />
            </div>
        </section>
    )
}
export default About