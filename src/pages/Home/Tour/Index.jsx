import React, { useState, useEffect } from 'react';
import { Walktour } from 'walktour';
import './Tour.scss';

function Tour() {
    const [showWalktour, setShowWalktour] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWalktour(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            selector: ".Notification",
            title: "5/1 الخطوة",
            description: `استخدم الشعارات لتلقى التنبيهات و اخر التحديثات`
        },
        {
            selector: ".Search__form",
            title: "5/2 الخطوة",
            description: `المدراء <br> متابعة أداء الموظفين والطلبات`
        },
        {
            selector: ".Services__slider ",
            title: "5/3 الخطوة",
            description: `بضغطة واحدة يمكنك البدء بطلب خدمة`
        },
        {
            selector: ".Orders ",
            title: "5/4 الخطوة",
            description: `لمتابعة طلباتك لإتخاذ اللازم بشكل سريع`
        },
        {
            selector: ".Statistics ",
            title: "5/5 الخطوة",
            description: `احصائيات عن الطلبات`
        }
    ];

    const customTooltipRenderer = (tourLogic) => {
        const isStepFour = tourLogic.stepIndex === 3;
        const isStepFive = tourLogic.stepIndex === 4;
        const walktourClass = isStepFour ? 'Walktour is--right' : (isStepFive ? 'Walktour is--left' : 'Walktour');
        const closeLabel = isStepFive ? 'انهاء' : 'تخطى';

        return (
            <div className={walktourClass}>
                <p className='Walktour__title'>{tourLogic.stepContent.title}</p>
                <p className='Walktour__desc'>{tourLogic.stepContent.description}</p>
                <div className="Walktour__actions">
                    {!isStepFive && <button className="Button Button__secondary Button__small" onClick={tourLogic.next} disabled={tourLogic.disableNext}>التالى</button>}
                    <button className="Button Button__outline Button__dark Button__small" onClick={tourLogic.close}>{closeLabel}</button>
                </div>
            </div>
        );
    };

    const maxWidth = 500;
    const isWideScreen = window.innerWidth >= maxWidth;

    return (
        isWideScreen && showWalktour &&
        <Walktour
            steps={steps.map(step => ({
                ...step,
                description: <div dangerouslySetInnerHTML={{ __html: step.description }} />
            }))}
            disableMaskInteraction={true}
            customTooltipRenderer={customTooltipRenderer}
            tooltipSeparation={62}
            zIndex='999999999'
            maskRadius={20}
            maskPadding={5}
            closeLabel="انهاء"
            movingTarget={true}
        />
    );
}
export default Tour;