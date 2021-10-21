import React, { useState } from "react"

import { Wrapper } from "./styled.components"

/**
 * Accordion is a component to rendering collapsed items.
 */
const Accordion = ({ options, renderItem, ...rest }) => {
  const [selected, setSelected] = useState(null)

  const handleChange = key => {
    if (key === selected) {
      return setSelected(null)
    }

    return setSelected(key)
  }

  return (
    <Wrapper {...rest}>
      {options.map((option, key) => (
        <li key={key}>
          {renderItem({
            option,
            key,
            onSelect: () => handleChange(key),
            isSelected: selected === key,
          })}
        </li>
      ))}
    </Wrapper>
  )
}

export default Accordion
