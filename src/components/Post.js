import post from "./Post.module.css"

export default function Post(props) {
    
    const DUMMY_DATA =
        {
            image:"https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/56623243_2280011322317721_7234264964297392128_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=dCRM7w_Z2QcAX9aCV_G&_nc_ht=scontent.fccu3-1.fna&oh=3ffa56f749a962d9d6061aa3d008e630&oe=60EC6F7B",
            userName : "Suman Biswas",
            place : "Tehatta",
            iso:"100",
            shutterSpeed:"1/640",
            aperture:"5.6f"
        }

    return(
        <div className={post.container}>
            <section className={post.header}>
                <h3 className={post.heading_posts}>Posts</h3>
            </section>
            <section className={post.bgcolor_post}>
                <section className={post.header_container}>
                    <h4 className={post.taker}>Taken by - {props.userName}</h4>
                    {/* <h4 className={post.taker}>Taken by - {DUMMY_DATA.userName}</h4> */}
                    <h4 className={post.place}>Place - {DUMMY_DATA.place}</h4>
                </section>
                <ul className={post.image_metadata_container}>
                    <li>SP 	&#58; {DUMMY_DATA.shutterSpeed}</li>
                    <li>AV 	&#58; {DUMMY_DATA.aperture}</li>
                    <li>ISO &#58; {DUMMY_DATA.iso}</li>
                </ul>
            </section>
                <img className={post.user_post} src={DUMMY_DATA.image} alt="user_post.img"></img>
                {/* <section className={post.like}></section> */}
        </div>
    );
    
}
