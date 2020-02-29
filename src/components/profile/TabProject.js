import React from "react";
import {List,Icon} from "antd";

const data = [
    {
        name: "ARKKOD (Kişisel Blog)",
        description: "Kişisel bloğumda genel olarak yazılım ile ilgili edindiğim tecrübeleri paylaşıyorum.",
        date: "02.10.2019",
        url: "https://www.arkkod.com/"
    },
    {
        name: "Stajyerco",
        description: "Firmaların staj ilanları yayımlamasına ve öğrencilerin cv hazırlayarak ilanlara başvurmasını sağlayan proje.",
        date: "02.10.2019",
        url: "https://github.com/orcuntuna/stajyerco"
    },
    {
        name: "Guvercin REST API Client",
        description: "Electron kullanarak rest api işlemlerinizi yapmayı sağlayan masaüstü uygulama.",
        date: "02.10.2019",
        url: "https://github.com/orcuntuna/guvercin"
    },
];

export default class TabProject extends React.Component {
    render() {
        return (
            <div className="tab-skills">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className="list">
                                <a className={"absolute-link"} href={item.url}><Icon type={"link"}/></a>
                                <p className="title">{item.name}</p>
                                <p className="desc">{item.description}</p>
                                <p className="years">{item.date}</p>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
