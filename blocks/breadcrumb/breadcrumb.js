import { getDefaultLanguage } from "../../scripts/utils.js";

export default function decorate(block) {
  const protocol = window.location.protocol;
  const port = window.location.port ? `:${window.location.port}` : '';
  const domainPath = `${protocol}//${window.location.hostname}${port}`;
  
  const parentBlock = block.closest('.section');
  const parentBlockStyle = block.closest('.section').style;
  const blockStyle = block.style;
  const metaData = parentBlock.dataset;
  const {
    backgroundColor, textColor, paddingTop, paddingBottom, marginTop, marginBottom,
  } = metaData;
  const [richTextEl] = [...block.children];

  if (backgroundColor) parentBlockStyle.backgroundColor = backgroundColor;
  if (textColor) blockStyle.color = textColor;
  if (paddingTop) blockStyle.paddingTop = `${paddingTop}rem`;
  if (paddingBottom) blockStyle.paddingBottom = `${paddingBottom}rem`;
  if (marginTop) parentBlockStyle.marginTop = `${marginTop}rem`;
  if (marginBottom) parentBlockStyle.marginBottom = `${marginBottom}rem`;


  block.innerHTML = `
    <div class="container-fluid">
        <div class="row d-flex">
            <div>
              <a href="${domainPath}/${getDefaultLanguage()}/" title="${richTextEl.innerText}">${richTextEl.innerText}</a>
              /
              </div>
        </div>
    </div>
  `;
}