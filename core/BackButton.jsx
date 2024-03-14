"use client"
export default function BackButton() {
    return <div className={"m-5"}><button onClick={() => window.history.back()}>
        <img src={"/assets/img/back.png"} width={50} />
    </button></div>;
}
