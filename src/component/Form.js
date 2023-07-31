import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export function Form(props) {
    
    return (
        <>
            <Accordion className='faq'>
                <AccordionItem header="What is Lorem Ipsum?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="Where does it come from?">
                    Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                    vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                    vitae, accumsan auctor mi.
                </AccordionItem>

                <AccordionItem header="Why do we use it?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit
                    amet ante. Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>

                <AccordionItem header="Why do we use it?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit
                    amet ante. Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>
            </Accordion>
            <div>
                <img src={props.dbpath.imgsrc} alt="배너" className='img-fluid mx-auto d-block' style={{borderRadius : `15px`}}/>
            </div>
        </>
    )
}
