import { useStyleRegistry } from "styled-jsx";
import Layout from "../../components/Layouts";
import { getAllPostsIds, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css"


export async function getStaticPaths() {
    const paths=getAllPostsIds();

    return{
        paths,
        fallback:false,
    };
}

export async function getStaticProps({ params }){
    const postData=await getPostData(params.id);

    return{
        props:{
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{__html:postData.blogContentHTML}}/>
            </article>
        </Layout>
    );

}