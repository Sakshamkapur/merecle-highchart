import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { channels } from "../data/channels";
import { messageCountList } from "../data/messageCountList";
import {engagementHelper} from "../helpers/EngagementHelper";

const EngagementMessagesOverTime = ()=>{
  const options = engagementHelper.engagementMessageOverTimeChartOptions(messageCountList, channels)

	return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default EngagementMessagesOverTime