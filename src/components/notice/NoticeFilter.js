import React from "react";
import {Icon,Input,Select,Button} from "antd";

export default class NoticeFilter extends React.Component {
    render() {
        return (
            <div className="notice-filter">
                <div className="filter">
                    <label htmlFor="custom_search">Özel Arama</label>
                    <Input id="custom_search" placeholder="javascript, react, vb." />
                </div>
                <div className="filter">
                    <label htmlFor="location">Konum</label>
                    <Select
                        showSearch
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Şehirleri seçebilirsiniz"
                        optionFilterProp="children"
                    >
                        <Select.Option value="1">İstanbul</Select.Option>
                        <Select.Option value="2">Ankara</Select.Option>
                        <Select.Option value="3">İzmir</Select.Option>
                        <Select.Option value="4">Trabzon</Select.Option>
                    </Select>
                </div>
                <div className="filter">
                    <label htmlFor="department">Bölüm</label>
                    <Select
                        showSearch
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Bölümleri seçebilirsiniz"
                        optionFilterProp="children"
                    >
                        <Select.Option value="1">Yazılım Mühendisliği</Select.Option>
                        <Select.Option value="2">Endüstiri Mühendisliği</Select.Option>
                        <Select.Option value="3">Makine Mühendisliği</Select.Option>
                        <Select.Option value="4">Bilgisayar Mühendisliği</Select.Option>
                    </Select>
                </div>
                <div className="filter">
                    <label htmlFor="intership_type">Staj Tipi</label>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Bölümleri seçebilirsiniz"
                        optionFilterProp="children"
                    >
                        <Select.Option value="1">Yaz Stajı</Select.Option>
                        <Select.Option value="2">Kış Stajı</Select.Option>
                    </Select>
                </div>
                <Button block={true} type="primary" icon="filter" size="large">Filtrele</Button>
            </div>
        );
    }
}
