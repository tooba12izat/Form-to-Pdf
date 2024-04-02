import React, { useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf';

const ApplicationDivorce8A = () => {
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "Application-Divorce-8A.pdf",
        page: { margin: Margin.SMALL },
    });

    const handleDownload = () => {
        toPDF()
    }

    const [formData, setFormData] = useState({
        courtName: '',
        courtFileNumber: '',
        courtOfficeAddress: '',
        applicationType: '',

        applicant: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        applicantsLawyer: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        respondent: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },
        respondentsLawyer: {
            fullLegalName: '',
            address: '',
            phoneAndFax: '',
            email: '',
        },

        applicationClaim: '', // divorce-only, joint-divorce
        dateOfIssue: '',
        clerkOfTheCourt: '',

        // Family History
        familyHistory: {
            applicant: {
                age: '',
                birthdate: '',
                muncipilityAndProvince: '',
                since: '',
                firstNameBeforeMarriage: '',
                lastNameBeforeMarriage: '',
                genderBeforeMarriage: '',
                isDivorcedBefore: '',
                divorcedBeforePlace: '',
            },
            respondent: {
                age: '',
                birthdate: '',
                muncipilityAndProvince: '',
                since: '',
                firstNameBeforeMarriage: '',
                lastNameBeforeMarriage: '',
                genderBeforeMarriage: '',
                isDivorcedBefore: '',
                divorcedBeforePlace: '',
            },
            relationshipDates: {
                marriedOn: {
                    checked: false,
                    date: '',
                },
                startedLivingTogetherOn: {
                    checked: false,
                    date: '',
                },
                separatedOn: {
                    checked: false,
                    date: '',
                },
                isNeverLivedTogether: {
                    checked: false,
                },
            },
            theChildren: {
                child0: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
                child1: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
                child2: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
                child3: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
                child4: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
                child5: {
                    fullLegalName: '',
                    age: '',
                    birthdate: '',
                    muncipilityAndProvince: '',
                    nowLivingWith: '',
                },
            },
            prevCaseOrAgreements: {
                haveBeenInCourt: '',
                haveWrittenAgreement: '',
                writtenAgreement: '',
                haveNoticeOfCalculation: '',
                noticeOfCalculation: '',
                isAskingToMakeOrder: '',
                askingToMakeOrder: '',
            },
            claims: {
                divorceAct: {
                    divorce: true,
                    spousalSupport: false,
                    supportForChildrenTableAmount: false,
                    supportForChildrenOtherThanTableAmount: false,
                    decisionMakingResponsibility: false,
                    parentingTime: false,
                },
                familyAct: {
                    spousalSupport: false,
                    supportForChildrenTableAmount: false,
                    supportForChildrenOtherThanTableAmount: false,
                    decisionMakingResponsibility: false,
                    parentingTime: false,
                    restraining: false,
                    indexingSpousalSupport: false,
                    declarationOfParentage: false,
                    guardianship: false,
                },
                property: {
                    eqalizationOfNetFamilyProperties: false,
                    exclusivePossessionOfMatrimonialHome: false,
                    exclusivePossessionOfContentsOfMatrimonialHome: false,
                    freezingAssets: false,
                    saleOfFamilyProperty: false,
                },
                other: {
                    costs: false,
                    annulment: false,
                    prejudgement: false,
                    other: false,
                    otherSpecify: '',
                }
            },
            applicantsOnlyClaim: {
                divorce: false,
                costs: false,
                costsDescription: '',
            }
        },

        // Important Facts
        importantFacts: {
            separation: {
                checked: false,
                date: '',
                haveNotLivedTogether: false,
                haveLivedTogether: false,
                haveLivedTogetherDescription: '',
            },
            adultry: {
                checked: false,
                nameOfSpouse: '',
                details: '',
            },
            cruelty: {
                checked: false,
                nameOfSpouse: '',
                hasTreatedNameOfSpouse: '',
                details: '',
            },
            detailsOfOtherOrder: '',
            legalBasisFacts: '',
        },

        // Applicant's Certificate
        applicantsCertificate: {
            divorce: {
                details: '',
                date: '',
                signature: '',
            },
            jointDivorce: {
                sig1: {
                    date: '',
                    signature: '',
                },
                sig2: {
                    date: '',
                    signature: '',
                }
            },
        },

        // Lawyer's Certificate
        lawyersCertificate: {
            sig1: {
                name: '',
                date: '',
                signature: '',
            },
            sig2: {
                name: '',
                date: '',
                signature: '',
            }
        },
    });

    function fillFormData(key, defaultVal = null) {
        return (e) => {
            const updatedFormData = { ...formData }; // Create a shallow copy of formData

            // Split the key into an array using dot (.) separator
            const keys = key.split('.'); // ['familyHistory', 'applicant', 'age']
            const value = e.target.value;

            // Traverse the nested structure and update the value
            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    // nestedObj[k] = value; // Update the value at the last key
                    nestedObj[k] = defaultVal ? defaultVal : value;
                } else {
                    nestedObj[k] = { ...nestedObj[k] }; // Create a shallow copy of the nested object
                    nestedObj = nestedObj[k]; // Move to the next level of nested object
                }
            }

            setFormData(updatedFormData); // Update the state with the new formData
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    function changeFormCheck(key) {
        return (e) => {
            const updatedFormData = { ...formData }; // Create a shallow copy of formData
            const value = e.target.checked;

            // Split the key into an array using dot (.) separator
            const keys = key.split('.'); // ['familyHistory', 'applicant', 'age']

            // Traverse the nested structure and update the value
            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    nestedObj[k] = value; // Update the value at the last key
                } else {
                    nestedObj[k] = { ...nestedObj[k] }; // Create a shallow copy of the nested object
                    nestedObj = nestedObj[k]; // Move to the next level of nested object
                }
            }

            setFormData(updatedFormData); // Update the state with the new formData
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    return (
        <div>
            <div className="pdf-form pdf-form-13b" style={{ backgroundColor: '#fff' }} ref={targetRef}>
                {/* Form Name */}
                <div className="row text-center mb-4">
                    <div className="col-12">
                        <div className="fw-bold fst-italic">
                            ONTARIO
                        </div>
                    </div>
                </div>

                {/* Form Details */}
                <div className="row">
                    <div className="col-9">
                        <div className="row justify-content-end">
                            <div className="col-11">
                                <div className="form-group align-items-center">
                                    <input type="text" className="form-control" id="at" name="at" value={formData.courtName}
                                        onChange={fillFormData('courtName')} />
                                    <div className="fst-italic">(Name of Court)</div>
                                </div>
                            </div>
                        </div>
                        <div className="row  justify-content-end">
                            <div className="col-1 fw-bold mt-2" style={{ paddingLeft: '40px' }}>at</div>
                            <div className="col-11">
                                <div className="form-group align-items-center">
                                    <input type="text" className="form-control" id="at" name="at" value={formData.courtOfficeAddress}
                                        onChange={fillFormData('courtOfficeAddress')} />
                                    <div className="fst-italic">Court office address</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group" style={{ marginTop: '-25px' }}>
                                    <span className="text-nowrap">Court File Number</span>
                                    <input type="text" className="form-control border-1 border-dark" id="at" name="at" value={formData.courtFileNumber}
                                        onChange={fillFormData('courtFileNumber')} />
                                </div>
                                <div className="fw-bolder text-end" style={{ marginTop: '-15px' }}>Form 8A: Application (Divorce)</div>
                                <div className="row pb-10px ml-30px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="divorce_type" value="simple" id="simple"
                                            onChange={fillFormData('applicationType')} checked={formData.applicationType === 'simple'} />
                                        <label className="form-check-label" htmlFor="simple">
                                            Simple (divorce only)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="divorce_type" value="joint" id="joint"
                                            onChange={fillFormData('applicationType')} checked={formData.applicationType === 'joint'} />
                                        <label className="form-check-label" htmlFor="joint">
                                            Joint
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applicants */}
                <div className="row pb-20px pl-40px">
                    <div className="col-6">
                        <div className="fw-bolder">Applicant(s)</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.applicant.fullLegalName}
                                    onChange={fillFormData('applicant.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.applicant.address}
                                    onChange={fillFormData('applicant.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.applicant.phoneAndFax}
                                    onChange={fillFormData('applicant.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.applicant.email}
                                    onChange={fillFormData('applicant.email')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fw-bolder">Applicant(s) Lawyer</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.fullLegalName}
                                    onChange={fillFormData('applicantsLawyer.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.address}
                                    onChange={fillFormData('applicantsLawyer.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.phoneAndFax}
                                    onChange={fillFormData('applicantsLawyer.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.applicantsLawyer.email}
                                    onChange={fillFormData('applicantsLawyer.email')} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Respondents */}
                <div className="row pb-20px pl-40px">
                    <div className="col-6">
                        <div className="fw-bolder">Respondent(s)</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.respondent.fullLegalName}
                                    onChange={fillFormData('respondent.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.respondent.address}
                                    onChange={fillFormData('respondent.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.respondent.phoneAndFax}
                                    onChange={fillFormData('respondent.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.respondent.email}
                                    onChange={fillFormData('respondent.email')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fw-bolder">Respondent(s) Lawyer</div>
                        <div className="data-group inputs border-1 border-dark">
                            <div className="data-input border-1 border-dark">
                                <div className="label">Full legal name:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.fullLegalName}
                                    onChange={fillFormData('respondentsLawyer.fullLegalName')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Address:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.address}
                                    onChange={fillFormData('respondentsLawyer.address')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Phone & fax:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.phoneAndFax}
                                    onChange={fillFormData('respondentsLawyer.phoneAndFax')} />
                            </div>
                            <div className="data-input border-1 border-dark">
                                <div className="label">Email:</div>
                                <input type="text" className="form-control" value={formData.respondentsLawyer.email}
                                    onChange={fillFormData('respondentsLawyer.email')} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calaims */}
                <div className="row pb-20px pl-40px">

                    <div className="border border-2 border-dark mb-5 p-3">
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="divorce_type2" value="simple" id="simple2"
                                onChange={fillFormData('applicationClaim')} checked={formData.applicationClaim === 'simple'} />
                            <label className="form-check-label fw-bold" htmlFor="simple2">
                                IN THIS CASE, THE APPLICANTE IS CLAIMING A DIVORCE ONLY.
                            </label>
                        </div>

                        <p className="paragraph fw-bold mb-3">
                            TO THE RESPONDENT(S): A COURT CASE FOR DIVORCE HAS BEEN STARTED AGAINST YOU IN THIS COURT. THE DETAILS ARE SET OUT ON THE ATTACHED PAGES.
                        </p>

                        <p className="paragraph mb-3">
                            <span className="fw-bold">THIS CASE IS ON THE STANDARD TRACK OF THE CASE MANAGEMENT SYSTEM. No court date has been set for this case</span>
                            but, if you have been served with a notice of motion, it has a court date and you or your lawyer should come to court for the motion. A case management judge will not be assigned until one of the parties asks the clerk of the court to schedule a case conference or until a motion is scheduled, whichever comes first.
                        </p>

                        <p className="paragraph mb-3">
                            <span className="fw-bold">IF, AFTER 365 DAYS, THE CASE HAS NOT BEEN SCHEDULED FOR TRIAL,</span>
                            the clerk of the court will send out a warning that the case will be dismissed within 60 days unless the parties file proof that the case has been settled or one of the parties asks for a case or a settlement conference.
                        </p>

                        <p className="paragraph mb-3">
                            <span className="fw-bold">IF YOU WANT TO OPPOSE ANY CLAIM IN THIS CASE,</span>
                            you or your lawyer must prepare an Answer (Form 10 - a blank copy should be attached), serve a copy on the applicant and file a copy in the court office with an Affidavit of Service (Form 6B).
                            <span className="fw-bold">YOU HAVE ONLY 30 DAYS AFTER THIS APPLICATION IS SERVED ON YOU (60 DAYS IF THIS APPLICATION IS SERVED ON YOU OUTSIDE CANADA OR THE UNITED STATES) TO SERVE AND FILE AN ANSWER. IF YOU DO NOT, THE CASE WILL GO AHEAD WITHOUT YOU AND THE COURT MAY MAKE AN ORDER AND ENFORCE IT AGAINST YOU.</span>
                        </p>

                        <p className="paragraph mb-3">
                            <span className="fw-bold">IF YOU WANT TO MAKE A CLAIM OF YOUR OWN,</span>
                            you or your lawyer must fill out the claim portion in the Answer, serve a copy on the applicant(s) and file a copy in the court office with an Affidavit of Service.

                            <ul>
                                <li>If you want to make a claim for support but do not want to make a claim for property or exclusive possession of the matrimonial home and its contents, you MUST fill out a Financial Statement (Form 13), serve a copy on the applicant(s) and file a copy in the court office.</li>
                                <li>However, if your only claim for support is for child support in the table amount specified under the Child Support Guidelines, you do not need to fill out, serve or file a Financial Statement.</li>
                                <li>If you want to make a claim for property or exclusive possession of the matrimonial home and its contents, whether or not it includes a claim for support, you MUST fill out a Financial Statement (Form 13.1, not Form 13), serve a copy on the applicant(s), and file a copy in the court office.</li>
                            </ul>
                        </p>

                        <p className="paragraph">
                            <span className="fw-bold">YOU SHOULD GET LEGAL ADVICE ABOUT THIS CASE RIGHT AWAY.</span>
                            If you cannot afford a lawyer, you may be able to get help from your local Legal Aid Ontario office.
                            {/* <Link to={{ pathname: "https://www.legalaid.on.ca/" }} target="_blank" className="fst-italic">(Go to www.legalaid.on.ca/.)</Link> */}
                        </p>

                    </div>

                    <div className="border border-2 border-dark p-3">
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="divorce_type2" value="joint" id="joint2"
                                onChange={fillFormData('applicationClaim')} checked={formData.applicationClaim === 'joint'} />
                            <label className="form-check-label" htmlFor="joint2">
                                <span className="fw-bold">THIS CASE IS A JOINT APPLICATION FOR DIVORCE. THE DETAILS ARE SET OUT ON THE ATTACHED PAGES.</span>
                                The application and affidavits in support of the application will be presented to a judge when the materials have been checked for completeness.
                            </label>
                        </div>

                        <p className="paragraph">
                            If you are requesting anything other than a simple divorce, such as support or property or exclusive possession of the matrimonial home and its contents, then refer to page 1 for instructions regarding the Financial Statement you should file.
                        </p>
                    </div>

                </div>

                {/* Clerk of the Court */}
                <div className="row pb-20px pl-40px mt-100px align-items-end">
                    <div className="col-6">
                        <div className="data-input flex-column mt-20px align-items-center">
                            <input type="date" className="form-control d-block" value={formData.dateOfIssue}
                                onChange={fillFormData('dateOfIssue')} />
                            <div className="label">Date of issue</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="data-input flex-column align-items-center">
                            <input type="text" className="form-control d-block" value={formData.clerkOfTheCourt}
                                onChange={fillFormData('clerkOfTheCourt')} />
                            <div className="label text-wrap">Clerk of the court</div>
                        </div>
                    </div>
                </div>

                {/* Family History */}
                <div className="row pb-20px pl-40px">
                    <p className="sub-heading">FAMILY HISTORY</p>

                    {/* Applicant */}
                    <div>
                        <div className="data-input">
                            <span className="fw-bold">APPLICANT: </span>
                            <span className="label">Age: </span>
                            <input type="text" className="form-control" style={{ width: '300px' }} value={formData.familyHistory.applicant.age}
                                onChange={fillFormData('familyHistory.applicant.age')} />
                            <span className="label"> Birthdate: </span>
                            <input type="date" className="form-control" value={formData.familyHistory.applicant.birthdate}
                                onChange={fillFormData('familyHistory.applicant.birthdate')} />
                        </div>

                        <div className="data-input">
                            <span className="label">Resident in (municipality & province) </span>
                            <input type="text" className="form-control" style={{ width: '300px' }} value={formData.familyHistory.applicant.muncipilityAndProvince}
                                onChange={fillFormData('familyHistory.applicant.muncipilityAndProvince')} />
                            <span className="label"> Since (date) </span>
                            <input type="date" className="form-control" value={formData.familyHistory.applicant.since}
                                onChange={fillFormData('familyHistory.applicant.since')} />
                        </div>

                        <div className="data-input">
                            <span className="label">First name on the day before the marriage date: </span>
                            <input type="text" className="form-control" value={formData.familyHistory.applicant.firstNameBeforeMarriage}
                                onChange={fillFormData('familyHistory.applicant.firstNameBeforeMarriage')} />
                        </div>

                        <div className="data-input">
                            <span className="label">Last name on the day before the marriage date: </span>
                            <input type="text" className="form-control" value={formData.familyHistory.applicant.lastNameBeforeMarriage}
                                onChange={fillFormData('familyHistory.applicant.lastNameBeforeMarriage')} />
                        </div>

                        <div className="label">Gender on the day before the marriage: </div>

                        <div className="d-flex flex-row gap-4 pb-10px">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applicant_gender" value="male" id="male1" checked={formData.familyHistory.applicant.genderBeforeMarriage === 'male'}
                                    onChange={fillFormData('familyHistory.applicant.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="male1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applicant_gender" value="female" id="female1" checked={formData.familyHistory.applicant.genderBeforeMarriage === 'female'}
                                    onChange={fillFormData('familyHistory.applicant.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="female1">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applicant_gender" value="another" id="another1" checked={formData.familyHistory.applicant.genderBeforeMarriage === 'another'}
                                    onChange={fillFormData('familyHistory.applicant.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="another1">
                                    Another gender
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applicant_gender" value="not available" id="not_available1" checked={formData.familyHistory.applicant.genderBeforeMarriage === 'not available'}
                                    onChange={fillFormData('familyHistory.applicant.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="not_available1">
                                    Gender information not available
                                </label>
                            </div>
                        </div>

                        <div className="row pb-10px">
                            <div className="d-flex flex-row gap-4">
                                <div className="label">Divorced before? </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="divorced_before" value="no" id="no1" checked={formData.familyHistory.applicant.isDivorcedBefore === 'no'}
                                        onChange={fillFormData('familyHistory.applicant.isDivorcedBefore')} />
                                    <label className="form-check-label ms-1" htmlFor="no1">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="divorced_before" value="yes" id="yes1" checked={formData.familyHistory.applicant.isDivorcedBefore === 'yes'}
                                        onChange={fillFormData('familyHistory.applicant.isDivorcedBefore')} />
                                    <label className="form-check-label ms-1" htmlFor="yes1">
                                        Yes (Place and date of previous divorce)
                                    </label>
                                </div>
                            </div>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.familyHistory.applicant.divorcedBeforePlace}
                                    onChange={fillFormData('familyHistory.applicant.divorcedBeforePlace')} />
                            </div>
                            {/* Separator */}
                            <div className="row pb-10px ml-10px mt-30px border-top border-2 border-dark" />
                        </div>

                    </div>

                    {/* Respondent */}
                    <div>
                        <div className="data-input">
                            <span className="fw-bold text-nowrap">RESPONDENT/JOINT APPLICATION: </span>
                            <span className="label">Age: </span>
                            <input type="text" className="form-control" style={{ width: '300px' }} value={formData.familyHistory.respondent.age}
                                onChange={fillFormData('familyHistory.respondent.age')} />
                            <span className="label"> Birthdate: </span>
                            <input type="date" className="form-control" value={formData.familyHistory.respondent.birthdate}
                                onChange={fillFormData('familyHistory.respondent.birthdate')} />
                        </div>

                        <div className="data-input">
                            <span className="label">Resident in (municipality & province) </span>
                            <input type="text" className="form-control" style={{ width: '300px' }} value={formData.familyHistory.respondent.muncipilityAndProvince}
                                onChange={fillFormData('familyHistory.respondent.muncipilityAndProvince')} />
                            <span className="label"> Since (date) </span>
                            <input type="date" className="form-control" value={formData.familyHistory.respondent.since}
                                onChange={fillFormData('familyHistory.respondent.since')} />
                        </div>

                        <div className="data-input">
                            <span className="label">First name on the day before the marriage date: </span>
                            <input type="text" className="form-control" value={formData.familyHistory.respondent.firstNameBeforeMarriage}
                                onChange={fillFormData('familyHistory.respondent.firstNameBeforeMarriage')} />
                        </div>

                        <div className="data-input">
                            <span className="label">Last name on the day before the marriage date: </span>
                            <input type="text" className="form-control" value={formData.familyHistory.respondent.lastNameBeforeMarriage}
                                onChange={fillFormData('familyHistory.respondent.lastNameBeforeMarriage')} />
                        </div>

                        <div className="label">Gender on the day before the marriage: </div>

                        <div className="d-flex flex-row gap-4 pb-10px">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="respondent_gender2" value="male" id="male2" checked={formData.familyHistory.respondent.genderBeforeMarriage === 'male'}
                                    onChange={fillFormData('familyHistory.respondent.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="male2">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="respondent_gender2" value="female" id="female2" checked={formData.familyHistory.respondent.genderBeforeMarriage === 'female'}
                                    onChange={fillFormData('familyHistory.respondent.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="female2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="respondent_gender2" value="another" id="another2" checked={formData.familyHistory.respondent.genderBeforeMarriage === 'another'}
                                    onChange={fillFormData('familyHistory.respondent.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="another2">
                                    Another gender
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="respondent_gender2" value="not available" id="not_available2" checked={formData.familyHistory.respondent.genderBeforeMarriage === 'not available'}
                                    onChange={fillFormData('familyHistory.respondent.genderBeforeMarriage')} />
                                <label className="form-check-label ms-1" htmlFor="not_available2">
                                    Gender information not available
                                </label>
                            </div>
                        </div>

                        <div className="row pb-10px">
                            <div className="d-flex flex-row gap-4">
                                <div className="label">Divorced before? </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="divorced_before2" value="no" id="no2" checked={formData.familyHistory.respondent.isDivorcedBefore === 'no'}
                                        onChange={fillFormData('familyHistory.respondent.isDivorcedBefore')} />
                                    <label className="form-check-label ms-1" htmlFor="no2">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="divorced_before2" value="yes" id="yes2" checked={formData.familyHistory.respondent.isDivorcedBefore === 'yes'}
                                        onChange={fillFormData('familyHistory.respondent.isDivorcedBefore')} />
                                    <label className="form-check-label ms-1" htmlFor="yes2">
                                        Yes (Place and date of previous divorce)
                                    </label>
                                </div>
                            </div>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.familyHistory.respondent.divorcedBeforePlace}
                                    onChange={fillFormData('familyHistory.respondent.divorcedBeforePlace')} />
                            </div>
                            {/* Separator */}
                            <div className="row pb-10px ml-10px mt-30px border-top border-2 border-dark" />
                        </div>

                    </div>

                    {/* Relationship Dates */}
                    <div>
                        <p className="paragraph fw-bold">RELATIONSHIP DATES: </p>

                        <div className="row">
                            <div className="col-6 d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="relationship_status" id="married_on"
                                        checked={formData.familyHistory.relationshipDates.marriedOn.checked === true}
                                        onChange={changeFormCheck('familyHistory.relationshipDates.marriedOn.checked')} />
                                </div>
                                <div className="data-input w-100">
                                    <label className="label" htmlFor="married_on">Married on (date) </label>
                                    <input type="date" className="form-control" value={formData.familyHistory.relationshipDates.marriedOn.date}
                                        onChange={fillFormData('familyHistory.relationshipDates.marriedOn.date')} />
                                </div>
                            </div>
                            <div className="col-6 d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="relationship_status" id="started_living_together"
                                        checked={formData.familyHistory.relationshipDates.startedLivingTogetherOn.checked === true}
                                        onChange={changeFormCheck('familyHistory.relationshipDates.startedLivingTogetherOn.checked')} />
                                </div>
                                <div className="data-input w-100">
                                    <label className="label" htmlFor="started_living_together">Started living together on (date) </label>
                                    <input type="date" className="form-control" value={formData.familyHistory.relationshipDates.startedLivingTogetherOn.date}
                                        onChange={fillFormData('familyHistory.relationshipDates.startedLivingTogetherOn.date')} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 d-flex flex-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="relationship_status" id="separated_on"
                                        checked={formData.familyHistory.relationshipDates.separatedOn.checked === true}
                                        onChange={changeFormCheck('familyHistory.relationshipDates.separatedOn.checked')} />
                                </div>
                                <div className="data-input w-100">
                                    <label className="label" htmlFor="separated_on">Separated on (date) </label>
                                    <input type="date" className="form-control" value={formData.familyHistory.relationshipDates.separatedOn.date}
                                        onChange={fillFormData('familyHistory.relationshipDates.separatedOn.date')} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="relationship_status" id="never_lived_together"
                                        checked={formData.familyHistory.relationshipDates.isNeverLivedTogether.checked === true}
                                        onChange={changeFormCheck('familyHistory.relationshipDates.isNeverLivedTogether.checked')} />
                                    <label className="form-check-label" htmlFor="never_lived_together">
                                        Never Lived Together
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="row pb-10px ml-10px mt-30px border-top border-2 border-dark" />

                    </div>

                    {/* Children */}
                    <div>
                        <p className="paragraph fw-bold">THE CHILD(REN) </p>

                        <p className="paragraph fst-italic">
                            List all children involved in this case, even if no claim is made for these children.
                        </p>

                        {/* table */}
                        <table className='pb-40px form-8a-children border-1 border-dark'>
                            <thead>
                                <tr>
                                    <th className='border-1 border-dark'>Full legal name</th>
                                    <th className='border-1 border-dark'>Age</th>
                                    <th className='border-1 border-dark'>Birthdate <br /><small><i>(d,m,y)</i></small></th>
                                    <th className='border-1 border-dark'>Resident in <br /><small><i>(municipality & province)</i></small></th>
                                    <th className='border-1 border-dark'>Now Living With <br /><small><i>(name of person and relationship to child)</i></small></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child0.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child0.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child0.age}
                                        onChange={fillFormData('familyHistory.theChildren.child0.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child0.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child0.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child0.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child0.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child0.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child0.nowLivingWith')} /></td>
                                </tr>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child1.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child1.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child1.age}
                                        onChange={fillFormData('familyHistory.theChildren.child1.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child1.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child1.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child1.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child1.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child1.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child1.nowLivingWith')} /></td>
                                </tr>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child2.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child2.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child2.age}
                                        onChange={fillFormData('familyHistory.theChildren.child2.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child2.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child2.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child2.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child2.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child2.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child2.nowLivingWith')} /></td>
                                </tr>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child3.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child3.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child3.age}
                                        onChange={fillFormData('familyHistory.theChildren.child3.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child3.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child3.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child3.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child3.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child3.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child3.nowLivingWith')} /></td>
                                </tr>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child4.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child4.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child4.age}
                                        onChange={fillFormData('familyHistory.theChildren.child4.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child4.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child4.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child4.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child4.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child4.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child4.nowLivingWith')} /></td>
                                </tr>
                                <tr>
                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child5.fullLegalName}
                                        onChange={fillFormData('familyHistory.theChildren.child5.fullLegalName')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child5.age}
                                        onChange={fillFormData('familyHistory.theChildren.child5.age')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child5.birthdate}
                                        onChange={fillFormData('familyHistory.theChildren.child5.birthdate')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child5.muncipilityAndProvince}
                                        onChange={fillFormData('familyHistory.theChildren.child5.muncipilityAndProvince')} /></td>

                                    <td className='border-1 border-dark'><input className="form-control" value={formData.familyHistory.theChildren.child5.nowLivingWith}
                                        onChange={fillFormData('familyHistory.theChildren.child5.nowLivingWith')} /></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

                {/* Previous Cases Or Agreements */}
                <div className="row pl-40px">
                    <p className="paragraph fw-bold">PREVIOUS CASES OR AGREEMENTS</p>

                    <p className="paragraph">
                        Have the parties of the children been in a court case before?
                    </p>

                    {/* 2 checkboxes for yes and no */}
                    <div className="row pb-20px">
                        <div className="row pb-10px">
                            <div className="d-flex gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="previous_cases" value="no" id="previous_cases_no" checked={formData.familyHistory.prevCaseOrAgreements.haveBeenInCourt === 'no'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveBeenInCourt')} />
                                    <label className="form-check-label" htmlFor="previous_cases_no">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="previous_cases" value="yes" id="previous_cases_yes" checked={formData.familyHistory.prevCaseOrAgreements.haveBeenInCourt === 'yes'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveBeenInCourt')} />
                                    <label className="form-check-label" htmlFor="previous_cases_yes">
                                        Yes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-20px">
                            <p className="paragraph">Have the parties made a written agreement dealing with any matter involved in this case? </p>

                            <div className="d-flex flex-row gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="written_agreement" value="no" id="written_agreement_no" checked={formData.familyHistory.prevCaseOrAgreements.haveWrittenAgreement === 'no'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveWrittenAgreement')} />
                                    <label className="form-check-label ms-1" htmlFor="written_agreement_no">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="written_agreement" value="yes" id="written_agreement_yes" checked={formData.familyHistory.prevCaseOrAgreements.haveWrittenAgreement === 'yes'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveWrittenAgreement')} />
                                    <label className="form-check-label ms-1" htmlFor="written_agreement_yes">
                                        Yes (Give date of agreement. Indicate which of its terms are in dispute. Attach an additional page if you need more space.)
                                    </label>
                                </div>
                            </div>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.familyHistory.prevCaseOrAgreements.writtenAgreement}
                                    onChange={fillFormData('familyHistory.prevCaseOrAgreements.writtenAgreement')} />
                            </div>
                        </div>

                        <div className="row pb-20px">
                            <p className="paragraph">Have a Notice of Calculation and/or a Notice of Recalculation been issued by the online Child Support Service in this case? </p>

                            <div className="d-flex flex-row gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="have_notice" value="no" id="have_notice_no" checked={formData.familyHistory.prevCaseOrAgreements.haveNoticeOfCalculation === 'no'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveNoticeOfCalculation')} />
                                    <label className="form-check-label ms-1" htmlFor="have_notice_no">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="have_notice" value="yes" id="have_notice_yes" checked={formData.familyHistory.prevCaseOrAgreements.haveNoticeOfCalculation === 'yes'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.haveNoticeOfCalculation')} />
                                    <label className="form-check-label ms-1" htmlFor="have_notice_yes">
                                        Yes (Give date(s) of Notice of Calculation or Recalculation)
                                    </label>
                                </div>
                            </div>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.familyHistory.prevCaseOrAgreements.noticeOfCalculation}
                                    onChange={fillFormData('familyHistory.prevCaseOrAgreements.noticeOfCalculation')} />
                            </div>
                        </div>

                        <div className="row pb-20px">
                            <p className="paragraph">If yes, are you asking the court to make an order for child support that is different from the amount set out in the Notice? </p>

                            <div className="d-flex flex-row gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="asking_court" value="no" id="asking_court_no" checked={formData.familyHistory.prevCaseOrAgreements.isAskingToMakeOrder === 'no'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.isAskingToMakeOrder')} />
                                    <label className="form-check-label ms-1" htmlFor="asking_court_no">
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="asking_court" value="yes" id="asking_court_yes" checked={formData.familyHistory.prevCaseOrAgreements.isAskingToMakeOrder === 'yes'}
                                        onChange={fillFormData('familyHistory.prevCaseOrAgreements.isAskingToMakeOrder')} />
                                    <label className="form-check-label ms-1" htmlFor="asking_court_yes">
                                        Yes (Provide an explanation)
                                    </label>
                                </div>
                            </div>
                            <div className="data-input">
                                <input type="text" className="form-control" value={formData.familyHistory.prevCaseOrAgreements.askingToMakeOrder}
                                    onChange={fillFormData('familyHistory.prevCaseOrAgreements.askingToMakeOrder')} />
                            </div>
                        </div>

                    </div>

                </div>

                {/* CLAIMS 2 */}
                <div className="row pl-40px">
                    <p className="sub-heading">CLAIMS</p>

                    <div className="border border-2 border-dark">
                        <p className="paragraph fw-bold border-bottom border-2 border-dark">
                            USE THIS FRAME ONLY IF THIS CASE IS A JOINT APPLICATION FOR DIVORCE
                        </p>
                        <div>
                            <p className="paragraph fw-bold">
                                WE JOINTLY ASK THE COURT FOR THE FOLLOWING:
                            </p>

                            <div className="row">
                                {/* Column 1 */}
                                <div className="col-4">
                                    <p className="paragraph fw-bold">
                                        Claims under the Divorce Act
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span>00</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="a_divorce" id="a_divorce"
                                                checked={formData.familyHistory.claims.divorceAct.divorce.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.divorce.checked')} />
                                            <label className="form-check-label" htmlFor="a_divorce">
                                                a Divorce
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>01</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="spousal_support" id="spousal_support"
                                                checked={formData.familyHistory.claims.divorceAct.spousalSupport.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.spousalSupport.checked')} />
                                            <label className="form-check-label" htmlFor="spousal_support">
                                                spousal support
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>02</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support02" id="child_support02"
                                                checked={formData.familyHistory.claims.divorceAct.supportForChildrenTableAmount.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.supportForChildrenTableAmount.checked')} />
                                            <label className="form-check-label" htmlFor="child_support02">
                                                a support for child(ren) - table amount
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>03</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support03" id="child_support03"
                                                checked={formData.familyHistory.claims.divorceAct.supportForChildrenOtherThanTableAmount.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.supportForChildrenOtherThanTableAmount.checked')} />
                                            <label className="form-check-label" htmlFor="child_support03">
                                                a support for child(ren) - other than table amount
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>04</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="decision_making" id="decision_making"
                                                checked={formData.familyHistory.claims.divorceAct.decisionMakingResponsibility.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.decisionMakingResponsibility.checked')} />
                                            <label className="form-check-label" htmlFor="decision_making">
                                                decision-making responsibility for child(ren)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>05</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="parenting_time" id="parenting_time"
                                                checked={formData.familyHistory.claims.divorceAct.parentingTime.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.divorceAct.parentingTime.checked')} />
                                            <label className="form-check-label" htmlFor="parenting_time">
                                                parenting time for child(ren)
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                {/* Column 2 */}
                                <div className="col-4">
                                    <p className="paragraph fw-bold">
                                        Claims under the Family Law Act or Children's Law Reform Act
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span>10</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="spousal_support10" id="spousal_support10"
                                                checked={formData.familyHistory.claims.familyAct.spousalSupport.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.spousalSupport.checked')} />
                                            <label className="form-check-label" htmlFor="spousal_support10">
                                                spousal support
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>11</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support11" id="child_support11"
                                                checked={formData.familyHistory.claims.familyAct.supportForChildrenTableAmount.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.supportForChildrenTableAmount.checked')} />
                                            <label className="form-check-label" htmlFor="child_support11">
                                                a support for child(ren) - table amount
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>12</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support12" id="child_support12"
                                                checked={formData.familyHistory.claims.familyAct.supportForChildrenOtherThanTableAmount.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.supportForChildrenOtherThanTableAmount.checked')} />
                                            <label className="form-check-label" htmlFor="child_support12">
                                                a support for child(ren) - other than table amount
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>13</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="decision_making13" id="decision_making13"
                                                checked={formData.familyHistory.claims.familyAct.decisionMakingResponsibility.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.decisionMakingResponsibility.checked')} />
                                            <label className="form-check-label" htmlFor="decision_making13">
                                                decision-making responsibility for child(ren)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>14</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="parenting_time14" id="parenting_time14"
                                                checked={formData.familyHistory.claims.familyAct.parentingTime.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.parentingTime.checked')} />
                                            <label className="form-check-label" htmlFor="parenting_time14">
                                                parenting time for child(ren)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>15</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="restraining" id="restraining"
                                                checked={formData.familyHistory.claims.familyAct.restraining.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.restraining.checked')} />
                                            <label className="form-check-label" htmlFor="restraining">
                                                restraining/non-harassment order
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>16</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="indexing_spousal_support" id="indexing_spousal_support"
                                                checked={formData.familyHistory.claims.familyAct.indexingSpousalSupport.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.indexingSpousalSupport.checked')} />
                                            <label className="form-check-label" htmlFor="indexing_spousal_support">
                                                indexing spousal support
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>17</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="declaration_of_parentage" id="declaration_of_parentage"
                                                checked={formData.familyHistory.claims.familyAct.declarationOfParentage.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.declarationOfParentage.checked')} />
                                            <label className="form-check-label" htmlFor="declaration_of_parentage">
                                                declaration of parentage
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>18</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="guardianship" id="guardianship"
                                                checked={formData.familyHistory.claims.familyAct.guardianship.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.familyAct.guardianship.checked')} />
                                            <label className="form-check-label" htmlFor="guardianship">
                                                guardianship over child's property
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                {/* Column 3 */}
                                <div className="col-4">
                                    <p className="paragraph fw-bold">
                                        Claims relating to property
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span>20</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="spousal_support20" id="spousal_support20"
                                                checked={formData.familyHistory.claims.property.eqalizationOfNetFamilyProperties.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.property.eqalizationOfNetFamilyProperties.checked')} />
                                            <label className="form-check-label" htmlFor="spousal_support20">
                                                equalization of net family properties
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>21</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support21" id="child_support21"
                                                checked={formData.familyHistory.claims.property.exclusivePossessionOfMatrimonialHome.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.property.exclusivePossessionOfMatrimonialHome.checked')} />
                                            <label className="form-check-label" htmlFor="child_support21">
                                                exclusive possession of matrimonial home
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>22</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="child_support22" id="child_support22"
                                                checked={formData.familyHistory.claims.property.exclusivePossessionOfContentsOfMatrimonialHome.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.property.exclusivePossessionOfContentsOfMatrimonialHome.checked')} />
                                            <label className="form-check-label" htmlFor="child_support22">
                                                exclusive possession of contents of matrimonial home
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>23</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="decision_making23" id="decision_making23"
                                                checked={formData.familyHistory.claims.property.freezingAssets.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.property.freezingAssets.checked')} />
                                            <label className="form-check-label" htmlFor="decision_making23">
                                                freezing assets
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>24</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="parenting_time24" id="parenting_time24"
                                                checked={formData.familyHistory.claims.property.saleOfFamilyProperty.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.property.saleOfFamilyProperty.checked')} />
                                            <label className="form-check-label" htmlFor="parenting_time24">
                                                sale of family property
                                            </label>
                                        </div>
                                    </div>

                                    <p className="paragraph fw-bold mt-4">
                                        Other claims
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span>30</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="costs" id="costs"
                                                checked={formData.familyHistory.claims.other.costs.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.other.costs.checked')} />
                                            <label className="form-check-label" htmlFor="costs">
                                                costs
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>31</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="annulment_of_marriage" id="annulment_of_marriage"
                                                checked={formData.familyHistory.claims.other.annulment.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.other.annulment.checked')} />
                                            <label className="form-check-label" htmlFor="annulment_of_marriage">
                                                annulment of marriage
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>32</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="prejudgment_interest" id="prejudgment_interest"
                                                checked={formData.familyHistory.claims.other.prejudgement.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.other.prejudgement.checked')} />
                                            <label className="form-check-label" htmlFor="prejudgment_interest">
                                                prejudgment interest
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <span>50</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="other_other_claims" id="other_other_claims"
                                                checked={formData.familyHistory.claims.other.other.checked === true}
                                                onChange={changeFormCheck('familyHistory.claims.other.other.checked')} />
                                            <label className="form-check-label" htmlFor="other_other_claims">
                                                Other (specify)
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* USE THIS FRAME ONLY IF THE APPLICANT'S ONLY CLAIM IN THIS CASE IS FOR DIVORCE. */}
                    <div className="border border-2 border-dark mt-40px">
                        <p className="paragraph fw-bold border-bottom border-2 border-dark">
                            USE THIS FRAME ONLY IF THE APPLICANT'S ONLY CLAIM IN THIS CASE IS FOR DIVORCE.
                        </p>
                        <div>
                            <p className="paragraph fw-bold">
                                I ASK THE COURT FOR:
                            </p>
                            <div className="paragraph fst-italic">(Check if applicable.)</div>

                            <div className="row">
                                {/* Column 1 */}
                                <div className="col-4">
                                    <div className="d-flex gap-2">
                                        <span>00</span>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="a_divorce" id="a_divorce22"
                                                checked={formData.familyHistory.applicantsOnlyClaim.divorce.checked === true}
                                                onChange={changeFormCheck('familyHistory.applicantsOnlyClaim.divorce.checked')} />
                                            <label className="form-check-label" htmlFor="a_divorce22">
                                                a Divorce
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="col-8">
                                    <div className="d-flex gap-2">
                                        <span>30</span>
                                        <div className="form-check d-flex flex-row w-100">
                                            <input className="form-check-input" type="checkbox" name="costs2" id="costs2"
                                                checked={formData.familyHistory.applicantsOnlyClaim.costs.checked === true}
                                                onChange={changeFormCheck('familyHistory.applicantsOnlyClaim.costs.checked')} />
                                            <label className="form-check-label ml-10px" htmlFor="costs2">
                                                costs
                                            </label>
                                            <div className="data-group w-100 ml-10px">
                                                <input type="text" className="form-control w-100 border-1 border-dark" value={formData.familyHistory.applicantsOnlyClaim.costsDescription}
                                                    onChange={fillFormData('familyHistory.applicantsOnlyClaim.costsDescription')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Facts */}
                <div className="row pl-40px mt-40px">
                    <p className="sub-heading">IMPORTANT FACTS SUPPORTING THE CLAIM FOR DIVORCE</p>

                    <div className="d-flex flex-row gap-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="separation_fact" id="separation_fact"
                                checked={formData.importantFacts.separation.checked === true}
                                onChange={changeFormCheck('importantFacts.separation.checked')} />
                            <label className="form-check-label" htmlFor="separation_fact">
                                <b>Separation: </b>
                                The spouses have lived separate and apart since (date)
                            </label>
                        </div>
                        <div className="data-input">
                            <input type="date" className="form-control" value={formData.importantFacts.separation.date}
                                onChange={fillFormData('importantFacts.separation.date')} />
                        </div>
                        <span>and</span>
                    </div>

                    <div className="ml-30px">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="not_lived_fact" id="not_lived_fact"
                                checked={formData.importantFacts.separation.haveNotLivedTogether === true}
                                onChange={changeFormCheck('importantFacts.separation.haveNotLivedTogether')} />
                            <label className="form-check-label" htmlFor="not_lived_fact">
                                have not lived together again since that date in an unsuccessful attempt at reconcile.
                            </label>
                        </div>
                    </div>

                    <div className="ml-30px">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="have_lived_fact" id="have_lived_fact"
                                checked={formData.importantFacts.separation.haveLivedTogether === true}
                                onChange={changeFormCheck('importantFacts.separation.haveLivedTogether')} />
                            <label className="form-check-label" htmlFor="have_lived_fact">
                                have lived toghether again during the following period(s) in an unsuccessful attempt at reconcile: (Give dates.)
                            </label>
                        </div>
                        <div className="data-input">
                            <input type="text" className="form-control" value={formData.importantFacts.separation.haveLivedTogetherDescription}
                                onChange={fillFormData('importantFacts.separation.haveLivedTogetherDescription')} />
                        </div>
                    </div>

                    <div className="d-flex flex-row gap-4 mt-20px">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="adultry_fact" id="adultry_fact"
                                checked={formData.importantFacts.adultry.checked === true}
                                onChange={changeFormCheck('importantFacts.adultry.checked')} />
                            <label className="form-check-label text-nowrap" htmlFor="adultry_fact">
                                <b>Adultry: </b>
                                (Name of spouse)
                            </label>
                        </div>
                        <div className="data-input w-100">
                            <input type="text" className="form-control" value={formData.importantFacts.adultry.nameOfSpouse}
                                onChange={fillFormData('importantFacts.adultry.nameOfSpouse')} />
                        </div>
                        <span className="text-nowrap">has committed adultry</span>
                    </div>

                    <p className="paragraph fst-italic">
                        (Give details. It is not necessary to name any other person involved but if you do name the other person, then you must serve this application on that person.)
                    </p>

                    <div className="data-input">
                        <textarea className="form-control border-1 border-dark" rows="5" value={formData.importantFacts.adultry.details}
                            onChange={fillFormData('importantFacts.adultry.details')} />
                    </div>

                    <div className="d-flex flex-row gap-4 mt-20px">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="cruelty_fact" id="cruelty_fact"
                                checked={formData.importantFacts.cruelty.checked === true}
                                onChange={changeFormCheck('importantFacts.cruelty.checked')} />
                            <label className="form-check-label text-nowrap" htmlFor="cruelty_fact">
                                <b>Cruelty: </b>
                                (Name of spouse)
                            </label>
                        </div>
                        <div className="data-input w-100">
                            <input type="text" className="form-control" value={formData.importantFacts.cruelty.nameOfSpouse}
                                onChange={fillFormData('importantFacts.cruelty.nameOfSpouse')} />
                        </div>
                        <span className="text-nowrap">has treated (name of spouse)</span>
                        <div className="data-input w-100">
                            <input type="text" className="form-control" value={formData.importantFacts.cruelty.hasTreatedNameOfSpouse}
                                onChange={fillFormData('importantFacts.cruelty.hasTreatedNameOfSpouse')} />
                        </div>
                    </div>

                    <p className="paragraph fst-italic">
                        with physical or mental cruelty of such a kind as to make continued cohabitation intolerable. (Give details.)
                    </p>

                    <div className="data-input">
                        <textarea className="form-control border-1 border-dark" rows="3" value={formData.importantFacts.cruelty.details}
                            onChange={fillFormData('importantFacts.cruelty.details')} />
                    </div>

                </div>

                {/* Claims 3 */}
                <div className="row pl-40px mt-40px">
                    <div className="border border-2 border-dark pb-3">
                        <p className="paragraph fw-bold border-bottom border-2 border-dark">
                            USE THIS FRAME ONLY IF THIS CASE IS A JOINT APPLICATION FOR DIVORCE.
                        </p>
                        <div>
                            <p className="paragraph">
                                The details of the other order(s) that we jointly ask the court to make are as follows: (Include any amount of support and the names of the children for whom support, decision-making responsibility, parenting time or contact is to be ordered.)
                            </p>
                        </div>
                        <div className="data-input">
                            <textarea className="form-control border-1 border-dark" rows="5" value={formData.importantFacts.detailsOfOtherOrder}
                                onChange={fillFormData('importantFacts.detailsOfOtherOrder')} />
                        </div>
                        <div className="sub-heading mt-30px">IMPORTANT FACTS SUPPORTING OUR CLAIM(S)</div>
                        <p className="paragraph">
                            (Set out the facts that form the leagal basis for your claim(s). Attach an additional page if you need more space.)
                        </p>
                        <div className="data-input">
                            <textarea className="form-control border-1 border-dark " rows="10" value={formData.importantFacts.legalBasisFacts}
                                onChange={fillFormData('importantFacts.legalBasisFacts')} />
                        </div>
                    </div>
                </div>

                {/* Applicant's Certificate */}
                <div className="row pl-40px">
                    <p className="sub-heading">APPLICANT'S CERTIFICATE</p>

                    <p className="paragraph fst-italic">
                        (Your lawyer, if you are represented, must complete the Lawyer's Certificate below.)
                    </p>
                    <p className="paragraph">
                        Sections 7.1 to 7.5 of the Divorce Act and section 33.1 of the Children's Law Reform Act require you and the other party to:
                    </p>
                    <ul>
                        <li>Exercise your decision-making responsibility, parenting time, or contact with a child in a manner that is·•·consistent with the child's best interests;</li>
                        <li>Protect the child from conflict arising from this case, to the best of your ability;</li>
                        <li>
                            Try to resolve your family law issues by using out-of-court dispute resolution options, if it is appropriate in your case (for more information on dispute resolution options available to you, including court-connected mediation, you can visit the
                            <a href='https://www.ontario.ca/page/family-law-services' target='_blank' rel="noreferrer">Ministry of the Attorney General's website</a>
                            or <a href='https://stepstojustice.ca/' target='_blank' rel="noreferrer">www.stepstojustice.ca</a>);
                        </li>
                        <li>Provide complete, accurate, and up-to-date information in this case; and</li>
                        <li>Comply with any orders made in this case.</li>
                    </ul>
                    <p className="paragraph">
                        <b>We/I</b> certify that <b>we are/I am</b> aware of these duties under the Divorce Act and the Children's Law Reform Act.
                    </p>
                    <div className="data-input">
                        <input type="text" className="form-control" value={formData.applicantsCertificate.divorce.details}
                            onChange={fillFormData('applicantsCertificate.divorce.details')} />
                    </div>
                    <p className="paragraph">
                        Complete this section if your only claim is for a divorce. Your lawyer, if you are represented, must complete the Lawyer's Certificate below.
                    </p>

                    {/* Signatures 1 */}
                    <div className="row">
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="date" className="form-control" value={formData.applicantsCertificate.divorce.date}
                                    onChange={fillFormData('applicantsCertificate.divorce.date')} />
                                <label className="label">Date of signature</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="text" className="form-control" value={formData.applicantsCertificate.divorce.signature}
                                    onChange={fillFormData('applicantsCertificate.divorce.signature')} />
                                <label className="label">Signature of applicant</label>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="row pb-10px ml-10px mt-30px border-top border-2 border-dark" />
                    <p className="paragraph">Complete this section if you are making a joint application for divorce.</p>

                    {/* Signatures 2 */}
                    <div className="row">
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="date" className="form-control" value={formData.applicantsCertificate.jointDivorce.sig1.date}
                                    onChange={fillFormData('applicantsCertificate.jointDivorce.sig1.date')} />
                                <label className="label">Date of signature</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="text" className="form-control" value={formData.applicantsCertificate.jointDivorce.sig1.signature}
                                    onChange={fillFormData('applicantsCertificate.jointDivorce.sig1.signature')} />
                                <label className="label">Signature of joint applicant</label>
                            </div>
                        </div>
                    </div>
                    {/* Signature 3 */}
                    <div className="row">
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="date" className="form-control" value={formData.applicantsCertificate.jointDivorce.sig2.date}
                                    onChange={fillFormData('applicantsCertificate.jointDivorce.sig2.date')} />
                                <label className="label">Date of signature</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="text" className="form-control" value={formData.applicantsCertificate.jointDivorce.sig2.signature}
                                    onChange={fillFormData('applicantsCertificate.jointDivorce.sig2.signature')} />
                                <label className="label">Signature of joint applicant</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lawyer's Certificate */}
                <div className="row pl-40px mt-40px">
                    <p className="sub-heading">LAWYER'S CERTIFICATE</p>

                    {/* Laywer 1 */}
                    <div className="data-input">
                        <label className="label">My name is:</label>
                        <input type="text" className="form-control" value={formData.lawyersCertificate.sig1.name}
                            onChange={fillFormData('lawyersCertificate.sig1.name')} />
                    </div>
                    <p className="paragraph">
                        and I am the applicant's lawyer in this case. I certify that I have complied with the requirements of section 7.7 of the Divorce Act and section 33.2 of the Children's Law Reform Act regarding reconciliation and the duty to discuss and inform.
                    </p>

                    {/* Signatures 1 */}
                    <div className="row">
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="date" className="form-control" value={formData.lawyersCertificate.sig1.date}
                                    onChange={fillFormData('lawyersCertificate.sig1.date')} />
                                <label className="label">Date of signature</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="text" className="form-control" value={formData.lawyersCertificate.sig1.signature}
                                    onChange={fillFormData('lawyersCertificate.sig1.signature')} />
                                <label className="label">Lawer's applicant</label>
                            </div>
                        </div>
                    </div>

                    {/* Laywer 2 */}
                    <div className="data-input">
                        <label className="label">My name is:</label>
                        <input type="text" className="form-control" value={formData.lawyersCertificate.sig2.name}
                            onChange={fillFormData('lawyersCertificate.sig2.name')} />
                    </div>
                    <p className="paragraph">
                        and I am the applicant's lawyer in this case. I certify that I have complied with the requirements of section 7.7 of the Divorce Act and section 33.2 of the Children's Law Reform Act regarding reconciliation and the duty to discuss and inform.
                    </p>

                    {/* Signatures 2 */}
                    <div className="row">
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="date" className="form-control" value={formData.lawyersCertificate.sig2.date}
                                    onChange={fillFormData('lawyersCertificate.sig2.date')} />
                                <label className="label">Date of signature</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="data-input d-flex flex-column align-items-center">
                                <input type="text" className="form-control" value={formData.lawyersCertificate.sig2.signature}
                                    onChange={fillFormData('lawyersCertificate.sig2.signature')} />
                                <label className="label">Lawer's applicant</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={handleDownload}>Download as PDF</button>
        </div>
    )
}

export default ApplicationDivorce8A