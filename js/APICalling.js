export async function NewsData(){
    const res = await fetch("https://bangla-news-scrapper.vercel.app/news/n1/");
    const data = await res.json();



    return data.news
}