import quote from "./Quote.module.css"


export default function Quote(){
    return(
        <div className={quote.container}>
            <h1 className={quote.quote}>“We don’t trust words.<br/> we trust pictures.”</h1>
        </div>
    );
};