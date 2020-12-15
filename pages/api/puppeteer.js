import puppeteer from "puppeteer";

const htmlToPDF = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    return await page.pdf();
}

export default async (req, res) => {
    const pdf = await htmlToPDF();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="cv.pdf"')
    res.statusCode = 200;
    res.send(pdf);
}
