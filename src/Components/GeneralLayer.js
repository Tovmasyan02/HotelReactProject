import React from 'react'

const GeneralLayer = ({children,layer_classname}) => {
    return (
        <div className={layer_classname}>
            {children}
        </div>
    )
}

export default GeneralLayer

GeneralLayer.defaultProps={
    layer_classname:"defaultHero"
}