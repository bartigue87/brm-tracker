import React, { useEffect, useState } from "react";
import { useHttpClient } from "../util/http-hook";
import HistoryList from "./HistoryList";

const TrackerHistory = (props) => {
  const trackerId = props.trackerId;
  const { isLoading, sendRequest } = useHttpClient();
  const [loadedHistory, setLoadedHistory] = useState();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5002/api/history/tracker/${trackerId}`
        );
        setLoadedHistory(responseData.history);
      } catch (err) {}
    };
    fetchHistory();
  }, [sendRequest, trackerId]);

  return (
    <>{!isLoading && loadedHistory && <HistoryList items={loadedHistory} />}</>
  );
};

export default TrackerHistory;
