import React, { useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf';

const NetFamilyPropertyStatement13B = () => {
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "Net-Family-Property-Statement-13B.pdf",
        page: { margin: Margin.SMALL },
    });

    const handleDownload = () => {
        toPDF()
    }
    const [formData, setFormData] = useState({
        courtName: '',
        courtFileNumber: '',
        courtOfficeAddress: '',

        applicants: {
            applicant1: '',
            applicant2: '',
        },
        applicantsLawyer: {
            lawyer1: '',
            lawyer2: '',
        },
        respondents: {
            respondent1: '',
            respondent2: '',
        },
        respondentsLawyer: {
            lawyer1: '',
            lawyer2: '',
        },

        myName: '',
        valuationDate: '',

        table1: {
            item1: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item2: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item3: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item4: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item5: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item6: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item7: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item8: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item9: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item10: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item11: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item12: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item13: {
                name: '',
                applicant: '',
                respondent: '',
            },
            total1: '',
            total2: '',
        },
        table2: {
            item1: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item2: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item3: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item4: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item5: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item6: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item7: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item8: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item9: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item10: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item11: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item12: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item13: {
                name: '',
                applicant: '',
                respondent: '',
            },
            total1: '',
            total2: '',
        },
        table3a: {
            item1: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item2: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item3: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item4: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item5: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item6: {
                name: '',
                applicant: '',
                respondent: '',
            },
            total1: '',
            total2: '',
        },
        table3b: {
            item1: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item2: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item3: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item4: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item5: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item6: {
                name: '',
                applicant: '',
                respondent: '',
            },
            total1: '',
            total2: '',
            netTotal1: '',
            netTotal2: '',
        },
        table4: {
            item1: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item2: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item3: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item4: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item5: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item6: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item7: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item8: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item9: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item10: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item11: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item12: {
                name: '',
                applicant: '',
                respondent: '',
            },
            item13: {
                name: '',
                applicant: '',
                respondent: '',
            },
            total1: '',
            total2: '',
        },
        totals: {
            total2: {
                total1: '',
                total2: '',
            },
            total3: {
                total1: '',
                total2: '',
            },
            total4: {
                total1: '',
                total2: '',
            },
            total5: {
                total1: '',
                total2: '',
            },
        },
        netTotals: {
            total1: {
                total1: '',
                total2: '',
            },
            total5: {
                total1: '',
                total2: '',
            },
            total6: {
                total1: '',
                total2: '',
            },
        },

        dateOfSignature: '',
        signature: '',
    });

    function fillFormData(key, defaultVal = null) {
        return (e) => {
            const updatedFormData = { ...formData };

            const keys = key.split('.');
            const value = e.target.value;

            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    nestedObj[k] = defaultVal ? defaultVal : value;
                } else {
                    nestedObj[k] = { ...nestedObj[k] };
                    nestedObj = nestedObj[k];
                }
            }

            setFormData(updatedFormData);
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    function changeFormCheck(key) {
        return (e) => {
            const updatedFormData = { ...formData };
            const value = e.target.checked;

            const keys = key.split('.');

            let nestedObj = updatedFormData;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                if (i === keys.length - 1) {
                    nestedObj[k] = value;
                } else {
                    nestedObj[k] = { ...nestedObj[k] };
                    nestedObj = nestedObj[k];
                }
            }

            setFormData(updatedFormData);
            console.log("🚀 ~ return ~ formData:", formData)
        };
    }

    return (
        <div>
            <div className="pdf-form pdf-form-13b" ref={targetRef} style={{ backgroundColor: '#fff' }}>
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
                                    <input type="text" className="form-control" id="at" name="at"
                                        value={formData.courtOfficeAddress}
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
                                    <input type="text" className="form-control border-1 border-dark" id="at" name="at"
                                        value={formData.courtFileNumber}
                                        onChange={fillFormData('courtFileNumber')} />
                                </div>
                                <div className="fw-bolder text-end" style={{ marginTop: '-15px' }}>Form 13B: Net Family Property Statement
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applicants */}
                <div className="row pb-20px pl-40px">
                    <div className="fw-bolder">Applicant(s)</div>
                    <div className="col-6">
                        <div className="data-group border-1 border-dark">
                            <label className='border-1 border-dark' >
                                Full legal name & address for service — street & number, municipality,
                                postal code, telephone & fax numbers and e-mail address (if any).
                            </label>
                            <textarea className='border-1 border-dark' rows="2" value={formData.applicants.applicant1}
                                onChange={fillFormData('applicants.applicant1')}></textarea>
                            <textarea className='border-1 border-dark' rows="2" value={formData.applicants.applicant2}
                                onChange={fillFormData('applicants.applicant2')}></textarea>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="data-group border-1 border-dark">
                            <label className='border-1 border-dark'>
                                Lawyer’s name & address — street & number, municipality, postal
                                code, telephone & fax numbers and e-mail address (if any).
                            </label>
                            <textarea className='border-1 border-dark' rows="2" value={formData.applicantsLawyer.lawyer1}
                                onChange={fillFormData('applicantsLawyer.lawyer1')}></textarea>
                            <textarea className='border-1 border-dark' rows="2" value={formData.applicantsLawyer.lawyer2}
                                onChange={fillFormData('applicantsLawyer.lawyer2')}></textarea>
                        </div>
                    </div>
                </div>

                {/* Respondents */}
                <div className="row pb-20px pl-40px">
                    <div className="fw-bolder">Respondent(s)</div>
                    <div className="col-6">
                        <div className="data-group border-1 border-dark">
                            <label className='border-1 border-dark'>
                                Full legal name & address for service — street & number, municipality,
                                postal code, telephone & fax numbers and e-mail address (if any).
                            </label>
                            <textarea className='border-1 border-dark' rows="2" value={formData.respondents.applicant1}
                                onChange={fillFormData('respondents.applicant1')}></textarea>
                            <textarea className='border-1 border-dark' rows="2" value={formData.respondents.applicant2}
                                onChange={fillFormData('respondents.applicant2')}></textarea>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="data-group border-1 border-dark">
                            <label className='border-1 border-dark'>
                                Lawyer’s name & address — street & number, municipality, postal
                                code, telephone & fax numbers and e-mail address (if any).
                            </label>
                            <textarea className='border-1 border-dark' rows="2" value={formData.respondentsLawyer.lawyer1}
                                onChange={fillFormData('respondentsLawyer.lawyer1')}></textarea>
                            <textarea className='border-1 border-dark' rows="2" value={formData.respondentsLawyer.lawyer2}
                                onChange={fillFormData('respondentsLawyer.lawyer2')}></textarea>
                        </div>
                    </div>
                </div>

                {/* My Information */}
                <div className="row pb-10px pl-40px">
                    <div className="data-input">
                        <div className="label">My name is (full legal name)</div>
                        <input type="text" className="form-control" value={formData.myName}
                            onChange={fillFormData('myName')} />
                    </div>
                </div>

                {/* Valuation Information */}
                <div className="row pb-10px pl-40px">
                    <div className="data-input">
                        <div className="label">The valuation date for the following material is (date)</div>
                        <input type="date" className="form-control" value={formData.valuationDate}
                            onChange={fillFormData('valuationDate')} />
                    </div>
                </div>

                {/* Tables */}
                <div className="row pb-40px pl-40px">
                    <div className="text pb-10px">
                        (Complete the tables by filling in the columns for both parties, showing your assets, debts, etc.,
                        and those of your spouse.)
                    </div>

                    {/* Table 1 */}
                    <table className='pb-40px'>
                        <thead>
                            <tr>
                                <th colSpan={3} className="name border-1 border-dark">TABLE 1: Value of assets owned on valuation date</th>
                            </tr>
                            <tr>
                                <th colSpan={3} className="info border-1 border-dark">(List in the order of the categories in the financial
                                    statement.)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='text-center border-1 border-dark'>ITEM</th>
                                <th className='border-1 border-dark'>APPLICANT (in $)</th>
                                <th className='border-1 border-dark'>RESPONDENT (in $)</th>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item1.name}
                                    onChange={fillFormData('table1.item1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item1.applicant}
                                    onChange={fillFormData('table1.item1.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item1.respondent}
                                    onChange={fillFormData('table1.item1.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item2.name}
                                    onChange={fillFormData('table1.item2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item2.applicant}
                                    onChange={fillFormData('table1.item2.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item2.respondent}
                                    onChange={fillFormData('table1.item2.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item3.name}
                                    onChange={fillFormData('table1.item3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item3.applicant}
                                    onChange={fillFormData('table1.item3.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item3.respondent}
                                    onChange={fillFormData('table1.item3.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item4.name}
                                    onChange={fillFormData('table1.item4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item4.applicant}
                                    onChange={fillFormData('table1.item4.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item4.respondent}
                                    onChange={fillFormData('table1.item4.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item5.name}
                                    onChange={fillFormData('table1.item5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item5.applicant}
                                    onChange={fillFormData('table1.item5.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item5.respondent}
                                    onChange={fillFormData('table1.item5.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item6.name}
                                    onChange={fillFormData('table1.item6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item6.applicant}
                                    onChange={fillFormData('table1.item6.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item6.respondent}
                                    onChange={fillFormData('table1.item6.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item7.name}
                                    onChange={fillFormData('table1.item7.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item7.applicant}
                                    onChange={fillFormData('table1.item7.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item7.respondent}
                                    onChange={fillFormData('table1.item7.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item8.name}
                                    onChange={fillFormData('table1.item8.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item8.applicant}
                                    onChange={fillFormData('table1.item8.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item8.respondent}
                                    onChange={fillFormData('table1.item8.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item9.name}
                                    onChange={fillFormData('table1.item9.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item9.applicant}
                                    onChange={fillFormData('table1.item9.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item9.respondent}
                                    onChange={fillFormData('table1.item9.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item10.name}
                                    onChange={fillFormData('table1.item10.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item10.applicant}
                                    onChange={fillFormData('table1.item10.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item10.respondent}
                                    onChange={fillFormData('table1.item10.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item11.name}
                                    onChange={fillFormData('table1.item11.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item11.applicant}
                                    onChange={fillFormData('table1.item11.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item11.respondent}
                                    onChange={fillFormData('table1.item11.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item12.name}
                                    onChange={fillFormData('table1.item12.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item12.applicant}
                                    onChange={fillFormData('table1.item12.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item12.respondent}
                                    onChange={fillFormData('table1.item12.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item13.name}
                                    onChange={fillFormData('table1.item13.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item13.applicant}
                                    onChange={fillFormData('table1.item13.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table1.item13.respondent}
                                    onChange={fillFormData('table1.item13.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">Total 1</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table1.total1}
                                    onChange={fillFormData('table1.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table1.total2}
                                    onChange={fillFormData('table1.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 2 */}
                    <table className='pb-40px'>
                        <thead>
                            <tr>
                                <th colSpan={3} className="name border-1 border-dark">TABLE 2: Value of debts and liabilities on valuation date</th>
                            </tr>
                            <tr>
                                <th colSpan={3} className="info border-1 border-dark">(List in the order of the categories in the financial statement.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='text-center border-1 border-dark'>ITEM</th>
                                <th className='border-1 border-dark'>APPLICANT (in $)</th>
                                <th className='border-1 border-dark'>RESPONDENT (in $)</th>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item1.name}
                                    onChange={fillFormData('table2.item1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item1.applicant}
                                    onChange={fillFormData('table2.item1.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item1.respondent}
                                    onChange={fillFormData('table2.item1.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item2.name}
                                    onChange={fillFormData('table2.item2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item2.applicant}
                                    onChange={fillFormData('table2.item2.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item2.respondent}
                                    onChange={fillFormData('table2.item2.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item3.name}
                                    onChange={fillFormData('table2.item3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item3.applicant}
                                    onChange={fillFormData('table2.item3.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item3.respondent}
                                    onChange={fillFormData('table2.item3.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item4.name}
                                    onChange={fillFormData('table2.item4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item4.applicant}
                                    onChange={fillFormData('table2.item4.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item4.respondent}
                                    onChange={fillFormData('table2.item4.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item5.name}
                                    onChange={fillFormData('table2.item5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item5.applicant}
                                    onChange={fillFormData('table2.item5.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item5.respondent}
                                    onChange={fillFormData('table2.item5.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item6.name}
                                    onChange={fillFormData('table2.item6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item6.applicant}
                                    onChange={fillFormData('table2.item6.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item6.respondent}
                                    onChange={fillFormData('table2.item6.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item7.name}
                                    onChange={fillFormData('table2.item7.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item7.applicant}
                                    onChange={fillFormData('table2.item7.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item7.respondent}
                                    onChange={fillFormData('table2.item7.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item8.name}
                                    onChange={fillFormData('table2.item8.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item8.applicant}
                                    onChange={fillFormData('table2.item8.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item8.respondent}
                                    onChange={fillFormData('table2.item8.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item9.name}
                                    onChange={fillFormData('table2.item9.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item9.applicant}
                                    onChange={fillFormData('table2.item9.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item9.respondent}
                                    onChange={fillFormData('table2.item9.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item10.name}
                                    onChange={fillFormData('table2.item10.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item10.applicant}
                                    onChange={fillFormData('table2.item10.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item10.respondent}
                                    onChange={fillFormData('table2.item10.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item11.name}
                                    onChange={fillFormData('table2.item11.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item11.applicant}
                                    onChange={fillFormData('table2.item11.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item11.respondent}
                                    onChange={fillFormData('table2.item11.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item12.name}
                                    onChange={fillFormData('table2.item12.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item12.applicant}
                                    onChange={fillFormData('table2.item12.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item12.respondent}
                                    onChange={fillFormData('table2.item12.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item13.name}
                                    onChange={fillFormData('table2.item13.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item13.applicant}
                                    onChange={fillFormData('table2.item13.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table2.item13.respondent}
                                    onChange={fillFormData('table2.item13.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className="border-1 border-dark fw-bold text-end">Total 2</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table2.total1}
                                    onChange={fillFormData('table2.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table2.total2}
                                    onChange={fillFormData('table2.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 3 */}
                    <table className='pb-40px mt-2'>
                        <thead>
                            <tr>
                                <th colSpan={3} className="name border-1 border-dark">TABLE 3: Net value on date of marriage of property (other than
                                    a matrimonial home) after deducting debts or other liabilities on date of marriage (other
                                    than those relating directly to the purchase or significant improvement of a matrimonial
                                    home)
                                </th>
                            </tr>
                            <tr>
                                <th colSpan={3} className="info border-1 border-dark">(List in the order of the categories in the financial
                                    statement.)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='text-center border-1 border-dark'> 3(a) PROPERTY ITEM</th>
                                <th className='border-1 border-dark'>APPLICANT (in $)</th>
                                <th className='border-1 border-dark'>RESPONDENT (in $)</th>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item1.name}
                                    onChange={fillFormData('table3a.item1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item1.applicant}
                                    onChange={fillFormData('table3a.item1.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item1.respondent}
                                    onChange={fillFormData('table3a.item1.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item2.name}
                                    onChange={fillFormData('table3a.item2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item2.applicant}
                                    onChange={fillFormData('table3a.item2.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item2.respondent}
                                    onChange={fillFormData('table3a.item2.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item3.name}
                                    onChange={fillFormData('table3a.item3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item3.applicant}
                                    onChange={fillFormData('table3a.item3.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item3.respondent}
                                    onChange={fillFormData('table3a.item3.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item4.name}
                                    onChange={fillFormData('table3a.item4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item4.applicant}
                                    onChange={fillFormData('table3a.item4.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item4.respondent}
                                    onChange={fillFormData('table3a.item4.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item5.name}
                                    onChange={fillFormData('table3a.item5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item5.applicant}
                                    onChange={fillFormData('table3a.item5.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item5.respondent}
                                    onChange={fillFormData('table3a.item5.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item6.name}
                                    onChange={fillFormData('table3a.item6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item6.applicant}
                                    onChange={fillFormData('table3a.item6.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3a.item6.respondent}
                                    onChange={fillFormData('table3a.item6.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className="border-1 border-dark fw-bold text-end">TOTAL OF PROPERTY ITEMS</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3a.total1}
                                    onChange={fillFormData('table3a.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3a.total2}
                                    onChange={fillFormData('table3a.total2')} /></td>
                            </tr>
                            <tr>
                                <th className='text-center'> 3(b) DEBT ITEM</th>
                                <th>APPLICANT (in $)</th>
                                <th>RESPONDENT (in $)</th>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item1.name}
                                    onChange={fillFormData('table3b.item1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item1.applicant}
                                    onChange={fillFormData('table3b.item1.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item1.respondent}
                                    onChange={fillFormData('table3b.item1.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item2.name}
                                    onChange={fillFormData('table3b.item2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item2.applicant}
                                    onChange={fillFormData('table3b.item2.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item2.respondent}
                                    onChange={fillFormData('table3b.item2.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item3.name}
                                    onChange={fillFormData('table3b.item3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item3.applicant}
                                    onChange={fillFormData('table3b.item3.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item3.respondent}
                                    onChange={fillFormData('table3b.item3.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item4.name}
                                    onChange={fillFormData('table3b.item4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item4.applicant}
                                    onChange={fillFormData('table3b.item4.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item4.respondent}
                                    onChange={fillFormData('table3b.item4.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item5.name}
                                    onChange={fillFormData('table3b.item5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item5.applicant}
                                    onChange={fillFormData('table3b.item5.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item5.respondent}
                                    onChange={fillFormData('table3b.item5.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item6.name}
                                    onChange={fillFormData('table3b.item6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item6.applicant}
                                    onChange={fillFormData('table3b.item6.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table3b.item6.respondent}
                                    onChange={fillFormData('table3b.item6.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL OF DEBT ITEMS</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3b.total1}
                                    onChange={fillFormData('table3b.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3b.total2}
                                    onChange={fillFormData('table3b.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">NET TOTAL 3 [3(a) <small>minus</small> 3(b)]</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3b.netTotal1}
                                    onChange={fillFormData('table3b.netTotal1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table3b.netTotal2}
                                    onChange={fillFormData('table3b.netTotal2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 4 */}
                    <table className='pb-40px'>
                        <thead>
                            <tr>
                                <th colSpan={3} className="name border-1 border-dark">TABLE 4: Value or property excluded under subsection 4(2) of
                                    the Family Law Act
                                </th>
                            </tr>
                            <tr>
                                <th colSpan={3} className="info border-1 border-dark">(List in the order of the categories in the financial
                                    statement.)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='text-center border-1 border-dark'>ITEM</th>
                                <th className='border-1 border-dark'>APPLICANT (in $)</th>
                                <th className='border-1 border-dark'>RESPONDENT (in $)</th>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item1.name}
                                    onChange={fillFormData('table4.item1.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item1.applicant}
                                    onChange={fillFormData('table4.item1.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item1.respondent}
                                    onChange={fillFormData('table4.item1.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item2.name}
                                    onChange={fillFormData('table4.item2.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item2.applicant}
                                    onChange={fillFormData('table4.item2.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item2.respondent}
                                    onChange={fillFormData('table4.item2.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item3.name}
                                    onChange={fillFormData('table4.item3.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item3.applicant}
                                    onChange={fillFormData('table4.item3.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item3.respondent}
                                    onChange={fillFormData('table4.item3.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item4.name}
                                    onChange={fillFormData('table4.item4.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item4.applicant}
                                    onChange={fillFormData('table4.item4.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item4.respondent}
                                    onChange={fillFormData('table4.item4.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item5.name}
                                    onChange={fillFormData('table4.item5.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item5.applicant}
                                    onChange={fillFormData('table4.item5.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item5.respondent}
                                    onChange={fillFormData('table4.item5.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item6.name}
                                    onChange={fillFormData('table4.item6.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item6.applicant}
                                    onChange={fillFormData('table4.item6.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item6.respondent}
                                    onChange={fillFormData('table4.item6.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item7.name}
                                    onChange={fillFormData('table4.item7.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item7.applicant}
                                    onChange={fillFormData('table4.item7.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item7.respondent}
                                    onChange={fillFormData('table4.item7.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item8.name}
                                    onChange={fillFormData('table4.item8.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item8.applicant}
                                    onChange={fillFormData('table4.item8.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item8.respondent}
                                    onChange={fillFormData('table4.item8.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item9.name}
                                    onChange={fillFormData('table4.item9.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item9.applicant}
                                    onChange={fillFormData('table4.item9.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item9.respondent}
                                    onChange={fillFormData('table4.item9.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item10.name}
                                    onChange={fillFormData('table4.item10.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item10.applicant}
                                    onChange={fillFormData('table4.item10.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item10.respondent}
                                    onChange={fillFormData('table4.item10.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item11.name}
                                    onChange={fillFormData('table4.item11.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item11.applicant}
                                    onChange={fillFormData('table4.item11.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item11.respondent}
                                    onChange={fillFormData('table4.item11.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item12.name}
                                    onChange={fillFormData('table4.item12.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item12.applicant}
                                    onChange={fillFormData('table4.item12.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item12.respondent}
                                    onChange={fillFormData('table4.item12.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item13.name}
                                    onChange={fillFormData('table4.item13.name')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item13.applicant}
                                    onChange={fillFormData('table4.item13.applicant')} /></td>
                                <td className='border-1 border-dark'><input className="form-control" value={formData.table4.item13.respondent}
                                    onChange={fillFormData('table4.item13.respondent')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">Total 4</td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table4.total1}
                                    onChange={fillFormData('table4.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.table4.total2}
                                    onChange={fillFormData('table4.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 5 */}
                    <table className='pb-40px border-1 border-dark'>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 2 <small>(from the Form 2)</small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total2.total1}
                                    onChange={fillFormData('totals.total2.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total2.total2}
                                    onChange={fillFormData('totals.total2.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 3 <small>(from the Form 3)</small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total3.total1}
                                    onChange={fillFormData('totals.total3.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total3.total2}
                                    onChange={fillFormData('totals.total3.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 4 <small>(from the Form 4)</small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total4.total1}
                                    onChange={fillFormData('totals.total4.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total4.total2}
                                    onChange={fillFormData('totals.total4.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 5 <small><b>([TOTAL 2] + [TOTAL 3] + [TOTAL
                                    4])</b></small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total5.total1}
                                    onChange={fillFormData('totals.total5.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.totals.total5.total2}
                                    onChange={fillFormData('totals.total5.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table 6 */}
                    <table className='pb-40px border-1 border-dark'>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 1 <small>(from the Form 1)</small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total1.total1}
                                    onChange={fillFormData('netTotals.total1.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total1.total2}
                                    onChange={fillFormData('netTotals.total1.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 5 <small>(from the above)</small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total5.total1}
                                    onChange={fillFormData('netTotals.total5.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total5.total2}
                                    onChange={fillFormData('netTotals.total5.total2')} /></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end border-1 border-dark">TOTAL 6: NET FAMILY PROPERTY <small><b>([Total 1]</b> minus <b>[Total
                                    5])</b></small></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total6.total1}
                                    onChange={fillFormData('netTotals.total6.total1')} /></td>
                                <td className='border-1 border-dark'><input className="fw-bold form-control" value={formData.netTotals.total6.total2}
                                    onChange={fillFormData('netTotals.total6.total2')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Signatures */}
                <div className="row pb-40px pl-40px">
                    <div className="col-4">
                        <div className="data-input">
                            <div className="label">Date of Signature</div>
                            <input type="date" className="form-control" value={formData.dateOfSignature}
                                onChange={fillFormData('dateOfSignature')} />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="data-input">
                            <div className="label">Signature</div>
                            <input type="text" className="form-control" value={formData.signature}
                                onChange={fillFormData('signature')} />
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={handleDownload}>Download as PDF</button>
        </div>
    )
}

export default NetFamilyPropertyStatement13B