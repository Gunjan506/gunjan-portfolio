import Icon from '../Icon.jsx'

export default function WeatherVisual() {
  return (
    <div className="weather" aria-hidden="true">
      <div className="weather-search">
        <Icon name="search" size={14} />
        <span>Search a location</span>
      </div>
      <div className="weather-result">
        <Icon name="cloud" size={34} />
        <div className="weather-lines">
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}
