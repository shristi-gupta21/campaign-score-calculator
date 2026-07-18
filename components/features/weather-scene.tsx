import Image from "next/image"
import type { CSSProperties } from "react"

import {
  CLOUD_LAYOUT,
  CLOUD_OPACITY,
  CLOUD_PATHS,
  SKY_COLORS,
  STORM_CLOUD_PATH,
} from "@/constants/weather-scene"
import { cn } from "@/lib/utils"
import type { WeatherLevel } from "@/types/campaign"

type WeatherSceneProps = {
  weatherLevel: WeatherLevel
}

const SCENE_WIDTH = 500
const SCENE_HEIGHT = 364

const WeatherScene = ({ weatherLevel }: WeatherSceneProps) => {
  const cloudOpacity = CLOUD_OPACITY[weatherLevel]
  const showLightClouds = weatherLevel === 2 || weatherLevel === 3
  const showStormCloud = weatherLevel === 4
  const showRain = weatherLevel === 4

  return (
    <div
      className="relative aspect-500/364 w-full overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: SKY_COLORS[weatherLevel] }}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out",
          showLightClouds ? "opacity-100" : "opacity-0"
        )}
      >
        {CLOUD_LAYOUT.map((cloud) => (
          <div
            key={`${cloud.path}-${cloud.x}-${cloud.y}`}
            className={cn(
              "weather-cloud-drift absolute",
              cloud.driftDirection === "right"
                ? "weather-cloud-drift-right"
                : "weather-cloud-drift-left"
            )}
            style={
              {
                left: `${(cloud.x / SCENE_WIDTH) * 100}%`,
                top: `${(cloud.y / SCENE_HEIGHT) * 100}%`,
                width: `${(cloud.width / SCENE_WIDTH) * 100}%`,
                "--cloud-drift-duration": `${cloud.driftDuration}s`,
                "--cloud-drift-delay": `${cloud.driftDelay}s`,
              } as CSSProperties
            }
          >
            <svg
              viewBox={`0 0 ${cloud.width} ${cloud.height}`}
              className="h-auto w-full"
              fill="none"
            >
              <path
                d={CLOUD_PATHS[cloud.path]}
                fill="black"
                fillOpacity={cloudOpacity}
              />
            </svg>
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 500 364"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out",
          showStormCloud ? "opacity-100" : "opacity-0"
        )}
        preserveAspectRatio="xMidYMid slice"
      >
        <path d={STORM_CLOUD_PATH} fill="#3157A4" />
      </svg>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-[75%] overflow-hidden transition-opacity duration-700 ease-in-out",
          showRain ? "opacity-100" : "opacity-0"
        )}
      >
        <Image
          src="/rain.svg"
          alt=""
          width={474}
          height={274}
          className="weather-rain h-full w-full object-cover"
        />
      </div>

      <Image
        src="/cityscape.svg"
        alt=""
        width={498}
        height={136}
        className="absolute inset-x-0 bottom-0 h-[37.4%] w-full object-cover object-bottom"
      />
    </div>
  )
}

export default WeatherScene
