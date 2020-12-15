import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import CVMarkup from "../../components/CVMarkup";

const htmlToPDF = async (html) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    return await page.pdf();
}

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).send("405 Method Not Allowed. Only POST is allowed.");
        return;
    }

    try {
        const {cvData} = req.body;
        const cvHTML = ReactDOMServer.renderToStaticMarkup(<CVMarkup data={cvData}/>);
        const pdf = await htmlToPDF(cvHTML);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="cv.pdf"')
        res.statusCode = 200;
        res.send(pdf);
    } catch {
        res.statusCode = 500;
        res.send("Uh oh! Something went wrong.");
    }
}
