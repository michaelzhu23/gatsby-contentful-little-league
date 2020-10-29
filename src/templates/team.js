import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{data.contentfulTeam.teamInfo.name}</h1>
      <p>{data.contentfulTeam.teamInfo.sport}</p>
      <div>
        {data.contentfulTeam.coaches.map(coach => (
          <p>{coach}</p>
        ))}
      </div>
    </div>
  )
}

export default Team

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulTeam(slug: { eq: $slug }) {
      slug
      teeball
      coed
      coaches
      numberOfPlayers
      teamInfo {
        name
        sport
        league
      }
    }
  }
`
