import TimeAgo from 'react-timeago'
type Props = {
    time: string;
};

const LiveTimestamp = ({time}: Props) => {
  return (
    <div>
        <TimeAgo date={time} />
    </div>
  )
}

export default LiveTimestamp