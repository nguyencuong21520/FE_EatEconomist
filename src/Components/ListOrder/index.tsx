import React, { useContext, useEffect } from "react";
import { Input } from "antd";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { StoreContext } from "../../../store/ProviderStore";
import BarsFilter from "../Icons/BarsFilter";
import OrderCard from "./OrderCard";
import CreateBill from "../CreateBill";
import "./styles.scss";
import actionRequest from "../../../utils/restApi";
import { Obj } from "../Global/interface";

const ListOrder = () => {
  const store = useContext(StoreContext);
  const drawer = store.drawer;
  const transaction = store.transactions;
  const handleOpenDetailOrder = (item: Obj) => {
    drawer.handleDrawer({
      open: true,
      children: <CreateBill data={item} isView />,
      title: "Detail đơn order",
      placement: "right",
      size: "default",
    });
  };

  const getTransaction = async () => {
    const data = await actionRequest("api/v1/transaction/byUser", "get");
    transaction.handleTransactions({
      ...transaction.data,
      ...data.data,
      loading: false,
    });
  };

  useEffect(() => {
    getTransaction();
  }, []);
  return (
    <div className="listOrder">
      <div className="filterBar">
        <Input prefix={<SearchOutlined />} />
        <BarsFilter className="iconFilter" />
      </div>
      <p className="titleResult">
        {transaction.data.loading || !transaction.data?.transaction ? (
          <LoadingOutlined />
        ) : (
          transaction.data?.pagination?.totalItems + " Kết quả"
        )}
      </p>
      <div className="list">
        <div className="parent">
          {!transaction.data.loading &&
            transaction.data?.transaction?.map((item: Obj) => {
              return (
                <div
                  key={item._id}
                  className={`itemCard`}
                  onClick={() => {
                    handleOpenDetailOrder(item);
                  }}
                >
                  <OrderCard data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
