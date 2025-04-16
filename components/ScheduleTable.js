function ScheduleTable({ schedule }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="schedule-table">
        <thead>
          <tr>
            <th className="w-1/4">時間</th>
            <th className="w-1/4">活動</th>
            <th className="w-1/2">詳細資訊</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="schedule-row">
              <td className="font-medium">{item.time}</td>
              <td>{item.activity}</td>
              <td className="whitespace-pre-line">{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
