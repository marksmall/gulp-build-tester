import {Collection} from "./collection";

export const COLLECTIONS: Collection[] = [{
  id: "welcome",
  name: "Welcome",
  icon: `
    <svg x="0px" y="0px" width="68.03px" height="68.03px" viewBox="0 0 68.03 68.03" enable-background="new 0 0 68.03 68.03">
      <g>
        <path d="M27.625,65.272c13.592-0.513,18.66-7.433,23.295-19.104c4.413-11.103,10.644-13.815,10.037-15.589
          c-0.828-2.425-8.056-5.345-12.668,2.938c-0.772,1.388-1.616,2.54-2.417,3.53V11.002c0.002-1.593-1.294-3.839-3.837-3.839
          c-2.12-0.002-3.841,1.722-3.839,3.84l-0.002,20.974c-0.781-0.412-1.61-0.773-2.465-1.089V6.758c0-1.62-1.263-3.837-3.843-3.836
          c-2.117,0-3.836,1.715-3.838,3.836v22.724c0,0-1.229-0.07-2.464,0.068l0.001-20.804c0-1.802-1.4-3.84-3.845-3.839
          c-2.119-0.001-3.838,1.717-3.836,3.839L17.903,31.57c-0.862,0.408-1.692,0.859-2.467,1.37V15.484c0-1.675-1.366-3.492-3.492-3.493
          c-1.931,0.001-3.495,1.563-3.495,3.494L8.373,47.729C8.373,61.601,20.85,65.529,27.625,65.272z">
        </path>
      </g>
    </svg>
  `,
  subscriptionRequired: false,
  help: {
    left: {
      text: "How Do I Access Digimap?",
      link: "/webhelp/digimapsupport/about.htm#access/access_to_digimap.htm"
    },
    right: {
      text: "Training & Support Resources",
      link: "/webhelp/resources/index.html"
    }
  },
  apps: []
}, {
  id: "digimap",
  name: "Ordnance Survey",
  icon: `
    <svg version="1.1" x="0px" y="0px" width="68.03px" height="68.03px" viewBox="0 0 68.03 68.03" enable-background="new 0 0 68.03 68.03">
    <g>
      <g>
        <path d="M59.646,32.967l-0.168-2.457l-0.334-2.457l-0.612-2.345l-0.838-2.289l-1.06-2.177l-1.227-2.123l-1.505-1.955l-1.673-1.842
          l-0.893-0.893l-0.947-0.782l-1.004-0.781l-1.003-0.726l-1.005-0.671l-1.114-0.613l-1.06-0.558l-1.115-0.503l-1.171-0.445
          L41.747,8.96l-1.171-0.279l-1.171-0.278l-1.228-0.224l-1.226-0.167l-1.283-0.056l-1.227-0.056h-0.057l-0.612-5.191l-0.725,5.248
          l-2.453,0.279l-2.343,0.447l-2.285,0.726l-2.23,0.894l-2.064,1.116l-1.95,1.229l-1.84,1.508l-1.673,1.563l-1.562,1.786
          L13.311,19.4l-1.228,2.01l-1.003,2.123l-0.781,2.289L9.687,28.11l-0.334,2.457l-0.168,2.457l-3.902,0.502l3.902,0.501l0.223,2.402
          l0.391,2.344l0.613,2.289l0.836,2.232l1.06,2.123l1.226,2.01l1.451,1.896l1.616,1.787l0.837,0.783l0.893,0.781l0.892,0.725
          l0.948,0.672l0.948,0.613l0.947,0.559l1.004,0.559l1.058,0.445l1.005,0.447l1.059,0.391l1.115,0.336l1.116,0.334l1.114,0.223
          l1.115,0.225l1.116,0.111l1.171,0.111l0.836,6.645l0.725-6.645l1.227-0.057l1.283-0.055l1.226-0.168l1.172-0.223l1.228-0.223
          l1.17-0.336l1.171-0.391l1.115-0.447l1.115-0.445l1.114-0.559l1.06-0.615l1.005-0.67l1.003-0.668l1.004-0.783l0.947-0.838
          l0.893-0.838l1.617-1.787l1.45-1.896l1.227-2.01l1.059-2.123l0.837-2.232l0.613-2.232l0.445-2.346l0.168-2.4l4.015-0.558
          L59.646,32.967z M11.304,30.511l0.334-2.233l0.558-2.122l0.781-2.121l0.947-1.955l1.171-1.897l1.338-1.787l1.506-1.675l0.78-0.726
          l0.78-0.727l0.837-0.614l0.835-0.613l0.838-0.615l0.892-0.502l0.948-0.502l0.948-0.446l0.948-0.447l0.946-0.335l1.004-0.335
          l1.005-0.279l1.002-0.223l1.005-0.223l1.06-0.111l1.06-0.113l-0.447,3.015l-1.839,0.28l-1.786,0.446l-1.727,0.558l-1.673,0.726
          l-1.562,0.894l-1.45,1.006l-1.395,1.116l-1.282,1.228l-1.17,1.397l-1.06,1.451l-0.892,1.508l-0.837,1.619l-0.613,1.731
          l-0.503,1.786l-0.333,1.787l-0.169,1.897l-2.954,0.391L11.304,30.511z M29.146,30.456l-13.104,1.674l0.167-1.674l0.335-1.62
          l0.501-1.619l0.614-1.564l0.725-1.451l0.892-1.396l1.005-1.34l1.17-1.284l0.558-0.558l0.558-0.503l0.612-0.502l0.614-0.448
          l0.613-0.39l0.613-0.447L25.688,17l0.671-0.391l0.669-0.279l0.724-0.279l0.67-0.278l0.726-0.224l0.724-0.224l0.726-0.167
          l0.78-0.111l0.726-0.112L30.482,27.05l-7.304-5.081L29.146,30.456z M30.65,39.332l1.451,12.172l-0.726-0.113l-0.78-0.111
          l-0.726-0.223l-0.724-0.168l-0.726-0.223l-0.67-0.279l-0.724-0.279l-0.669-0.336l-0.671-0.334l-0.668-0.391l-0.613-0.391
          l-0.613-0.447l-0.614-0.445l-0.612-0.447l-0.558-0.502l-0.558-0.561l-1.115-1.172l-0.948-1.283l-0.836-1.34l-0.781-1.396
          l-0.612-1.451l-0.447-1.451l-0.39-1.564l-0.224-1.563l12.323,1.73l-5.466,7.928L30.65,39.332z M31.654,56.359l-1.004-0.111
          l-1.003-0.223l-1.004-0.223l-2.008-0.559l-0.948-0.391l-0.947-0.391l-0.947-0.447L22.9,53.514l-0.892-0.504l-0.838-0.613
          l-0.835-0.613l-0.837-0.613l-0.78-0.729l-0.78-0.725l-1.45-1.619l-1.338-1.73l-1.115-1.787l-0.948-1.898l-0.78-2.01l-0.558-2.064
          l-0.391-2.123l-0.223-2.176l3.012,0.445l0.223,1.787l0.39,1.785l0.502,1.732l0.669,1.619l0.837,1.617l0.947,1.508l1.116,1.451
          l1.227,1.342l0.612,0.613l0.67,0.559l0.669,0.557l0.724,0.561l0.726,0.447l0.725,0.445l0.78,0.447l0.782,0.391l0.78,0.334
          l0.779,0.336l0.837,0.277l0.781,0.281l0.892,0.166l0.836,0.225l0.837,0.111l0.892,0.111l0.335,3.016L31.654,56.359z M33.94,36.875
          l-0.725-0.055l-0.669-0.225l-0.614-0.334l-0.501-0.447l-0.447-0.502l-0.334-0.615l-0.223-0.67l-0.056-0.725l0.056-0.726
          l0.223-0.669l0.334-0.615l0.447-0.558l0.501-0.447l0.614-0.334l0.669-0.224l0.725-0.055l0.725,0.055l0.67,0.224l0.613,0.334
          l0.502,0.447l0.446,0.558l0.334,0.615l0.224,0.669l0.056,0.726l-0.056,0.725l-0.224,0.67l-0.334,0.615l-0.446,0.502l-0.502,0.447
          l-0.613,0.334l-0.67,0.225L33.94,36.875z M40.296,36.709l12.379-1.676l-0.224,1.676l-0.39,1.617l-0.502,1.564l-0.668,1.508
          l-0.78,1.395l-0.893,1.34l-1.003,1.285L47.1,46.59l-1.227,1.061l-1.339,0.951l-1.337,0.836l-1.506,0.67l-1.506,0.613l-1.561,0.449
          l-1.673,0.277l-1.673,0.168l1.506-13.344l9.59,6.42L40.296,36.709z M39.572,30.456l6.021-8.486l-8.697,6.141l-1.617-13.288
          l0.837,0.056l0.836,0.111l0.835,0.112l0.838,0.167l0.835,0.224l0.781,0.224l0.78,0.279l0.781,0.335l0.781,0.335l0.725,0.391
          l0.724,0.446l0.726,0.503l0.669,0.445l0.67,0.558l0.668,0.56l0.613,0.614l1.171,1.284l1.005,1.34l0.892,1.396l0.725,1.451
          l0.614,1.564l0.445,1.619l0.334,1.62l0.168,1.674L39.572,30.456z M57.471,36.596l-0.445,2.178l-0.614,2.123l-0.836,2.064
          l-1.005,1.898l-1.171,1.844l-1.338,1.73l-1.449,1.563l-1.616,1.395l-1.729,1.285l-1.896,1.117l-1.951,0.949l-2.063,0.725
          l-2.119,0.559l-2.229,0.391l-2.286,0.111l0.335-2.957l0.947-0.057l0.948-0.113l0.947-0.111l0.948-0.223l0.947-0.223l0.894-0.281
          l0.892-0.277l0.892-0.391l0.837-0.391l0.836-0.393l0.837-0.502l0.835-0.502l0.781-0.613l0.725-0.559l0.726-0.67l0.725-0.67
          L50,46.254l1.114-1.451l0.947-1.508l0.836-1.617l0.67-1.619l0.502-1.732l0.39-1.785l0.223-1.787l3.012-0.445L57.471,36.596z
          M54.682,32.353l-0.166-1.897l-0.335-1.843l-0.502-1.786L53.01,25.04l-0.836-1.676l-0.949-1.619l-1.171-1.507l-1.281-1.452
          l-0.725-0.67l-0.726-0.614l-0.78-0.614l-0.78-0.558l-0.78-0.502l-0.837-0.502l-0.836-0.446l-0.894-0.39l-0.892-0.335l-0.891-0.335
          l-0.893-0.279l-0.949-0.224l-0.892-0.167l-0.947-0.168l-1.004-0.056l-0.949-0.055l-0.334-3.016l1.115,0.056l1.172,0.056
          l1.115,0.167l1.059,0.223l1.115,0.223l1.06,0.335l1.061,0.335l1.059,0.39l1.003,0.447l1.004,0.559l1.003,0.559l0.948,0.614
          l0.947,0.614l0.894,0.726l0.835,0.782l0.838,0.782l1.505,1.675l1.338,1.787l1.171,1.897l0.948,1.955l0.78,2.121l0.558,2.122
          l0.335,2.233l0.167,2.233L54.682,32.353z"/>
      </g>
    </g>
    </svg>
  `,
  description: "The Ordnance Survey collection offers a range of contemporary OS map and data products.",
  subscriptionRequired: true,
  licenceUrl: "/webhelp/os/copyright/licence_agreement.htm",
  licence: `
    <div class="licence-text" style="font-family: Verdana, Arial, sans-serif;font-size: 12px;margin: 0;padding: 0;">
      <h1>
        End User Licence Agreement
      </h1><strong>IMPORTANT NOTICE:</strong>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        This end user licence agreement (Licence) is a legal
        agreement between you and the Secretary of State for
        Business, Innovation and Skills acting through Ordnance
        Survey, (whose principal place of business is at Explorer
        House, Adanac Drive, SOUTHAMPTON, UK, SO16 0AS) (referred
        to as <strong>Ordnance Survey</strong>,
        <strong>us</strong>, <strong>our</strong> or
        <strong>we</strong> in this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        It is a Licence for the use of Ordnance Survey mapping data
        through the EDINA Digimap Service for educational purposes.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>PLEASE READ THE LICENCE TERMS AND CONDITIONS SET
        OUT BELOW CAREFULLY AND ENSURE THAT YOU HAVE UNDERSTOOD
        THEM BEFORE YOU CLICK THE &#39;ACCEPT&#39; BUTTON. BY
        CLICKING THE &#39;ACCEPT&#39; BUTTON AND ACCESSING THE
        ORDNANCE SURVEY LICENSED DATA YOU AGREE TO BE BOUND BY
        THESE LICENCE TERMS AND CONDITIONS.</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>YOU MAY NOT ACCESS AND USE THE ORDNANCE SURVEY
        LICENSED DATA IN ANY WAY OR FOR ANY PURPOSE OTHER THAN AS
        SET OUT IN THIS LICENCE. IF YOU WISH TO USE ORDNANCE SURVEY
        LICENSED DATA FOR OTHER PURPOSES YOU MUST CONTACT ORDNANCE
        SURVEY TO DISCUSS A SEPARATE LICENCE.</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>IF THESE TERMS AND CONDITIONS CHANGE AT ANY TIME,
        YOU WILL BE PRESENTED WITH A NOTICE TO THAT EFFECT AND IF
        YOU WISH TO CONTINUE USING THE ORDNANCE SURVEY LICENSED
        DATA YOU MUST CLICK THE &#39;ACCEPT&#39; BUTTON TO AGREE TO
        THE NEW TERMS AND CONDITIONS.</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS
        OF THIS LICENCE DO NOT CLICK ON THE ACCEPT BUTTON OR USE
        THE ORDNANCE SURVEY LICENSED DATA.</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>1 Definitions</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        1.1 Where the words in this Licence are capitalised, you
        will find their meaning set out in Appendix 1, at the end
        of this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>2 Grant and Scope of your Licence</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        2.1 In consideration of you agreeing to abide by the terms
        of this Licence, (together with the licence fee paid by
        your Institution), Ordnance Survey hereby grants to you a
        non-exclusive, non-transferable, revocable licence to
        access and use the Ordnance Survey Licensed Data, solely
        for Educational Use (as defined in Appendix 1 and more
        particularly described in Clauses 3.1 to 3.4) or Limited
        Administrative Use (as more particularly described in
        Clauses 3.1 and 3.5), in accordance with the terms set out
        in this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        2.2 For the avoidance of doubt, OS OpenData is governed by
        separate licence terms which are published at <a href="http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf</a>.
        The terms set out in this EULA shall not apply to OS
        OpenData or any use of it by you.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>3 Your Permitted Use</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        3.1 Subject to Clauses 5 and 6 (and in particular, but
        without limitation, sub-clause 5.2.2), you may do any of
        the following activities as part of your Educational Use
        and/or Limited Administrative Use:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.1 download and store the Ordnance Survey Licensed Data
        to:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) your Institution&#39;s computer network;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) one of your Institution&#39;s Devices; and/or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) your own Device, which may be on any other computer
        network;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.2 display, view, interrogate, manipulate, modify,
        search and otherwise use the Ordnance Survey Licensed Data
        through:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) your Institution&#39;s computer network;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) your Institution&#39;s Devices; and/or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) your own Device, which may be on any other computer
        network.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.3 supply copies of the Ordnance Survey Licensed Data
        (in digital or printed form) to other Authorised End Users
        of both the same and a different Institution;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.4 supply Ordnance Survey Licensed Data to an Authorised
        Data Handler for the purposes of storing it in another
        computer network, provided that you ensure they have
        entered into a Digimap Data Handler Agreement;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.5 supply copies of the Ordnance Survey Licensed Data
        (in digital or printed form) to any PSMA or OSMA Member
        under the Public Sector Data Sharing provisions set out in
        Clause 4;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.1.6 print copies of the Ordnance Survey Licensed Data
        and/or the materials/media which you create which
        incorporate Ordnance Survey Licensed Data.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Educational Use</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        3.2 Educational Use is defined in Appendix 1. As part of
        your Educational Use, you may incorporate, (and/or
        facilitate the interaction with), Ordnance Survey Licensed
        Data in various materials / media, and you may publish,
        distribute, deposit and otherwise make those materials /
        media available to others (solely as described in
        sub-clauses 3.3 and 3.4, and subject to your obligations
        and restrictions set out in Clauses 4 and 5).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Academic Works, Presentation Materials, Research
        Works and Teaching Materials;</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        3.3 You may:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.1 incorporate the Ordnance Survey Licensed Data into
        Academic Works, Presentation Materials, Research Works and
        Teaching Materials, (these are defined in Appendix 1);
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.2 save and use copies of your Academic Works,
        Presentation Materials, Research Works and/or Teaching
        Materials yourself for Educational Use;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.3 distribute copies of your Academic Works,
        Presentation Materials, Research Works and/or Teaching
        Materials to other Authorised Users for their Educational
        Use;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.4 publish copies of your Academic Works, Presentation
        Materials, Research Works and/or Teaching Materials on the
        world wide web, provided that the mapping images included
        in such publications comply with the requirements of
        sub-clause 5.1.4, and subject always to sub-clause 5.2.3;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.5 deposit copies of your Academic Works, Presentation
        Materials, Research Works and/or Teaching Materials in your
        own Institution&#39;s library and academic repositories,
        and in other academic repositories, for general
        unrestricted use:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) in printed form; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) in electronic form, provided that the mapping images
        included in such copies comply with the requirements of
        sub-clause 5.1.4;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.6 distribute copies of your Academic Works and/or
        Teaching Materials to external educational assessors and
        examiners:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) in printed form; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) in electronic form, provided that the mapping images
        included in such copies comply with the requirements of
        sub-clause 5.1.4;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.7 distribute copies of your Academic Works and Research
        Works to an external sponsor of such Academic Works or
        Research Works:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) in printed form; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) in electronic form, provided that the mapping images
        included in such copies comply with the requirements of
        sub-clause 5.1.4, or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) in electronic form, with mapping images in a Vector
        Format, where such sponsor has its own licence to use the
        Ordnance Survey Licensed Data, solely for non- commercial
        purposes; and provided always that such sponsorship is not
        a Commercial Activity;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.8 publish copies of your Academic Works and Research
        Works in academic journals, periodicals and other
        publications, for the purpose of communicating the results
        of your scholarly work:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) in printed form; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) in electronic form, provided that the mapping images
        included in such publication comply with the requirements
        of sub-clause 5.1.4;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.3.9 display copies of your Presentation Materials at and
        in connection with a conference, seminar, workshop, or
        other similar presentation, and distribute them to
        delegates of the conference, seminar, workshop or other
        presentation:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) in printed form; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) in electronic form, provided that the mapping images
        included in such Presentation Materials comply with the
        requirements of sub-clause 5.1.4;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Educational Navigation Products/Services</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        3.4 You may incorporate the Ordnance Survey Licensed Data
        into an Educational Navigation Product/Service (this is
        defined in Appendix 1), provided that you comply with the
        requirements set out in this Clause 3.4
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.1 The mapping images included in the Educational
        Navigation Product/Service may be in a Vector Format,
        and/or be geo-referenced, but if so, they shall comply with
        the requirements of sub-clauses 5.1.4 c) to 5.1.4 e);
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.2 your Educational Navigation Product/Service shall
        only be made available for use by other Authorised Users
        and not publically accessible and for this reason it shall
        be password protected;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.3 your attention is drawn specifically (but without
        limitation) to your obligations and the restrictions set
        out in sub-clause 5.2.1, sub-clause 5.2.3, sub-clause
        5.2.6, sub-clause 5.2.7, and sub-clause 6.2.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.4 Subject to sub-clause 3.4.5, your Educational
        Navigation Product/Service shall only remain accessible for
        the then current Academic Year.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.5 Ordnance Survey acknowledges and accepts that in
        certain circumstances it may be necessary for your
        Educational Navigation Product/Service to remain active and
        available to view beyond one (1) Academic Year. If you
        and/or your Authorised Institution reasonably believe that
        your Educational Use necessitates this, you should discuss
        the same and after due consideration your Institution may
        give you written consent for your Educational Navigation
        Product/Service to remain active and available for a
        further Academic Year.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.6 your Educational Navigation Product/Service shall be
        subject to such other conditions as Ordnance Survey may
        reasonably recommend from time to time.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.4.7 If you wish to create an Educational Navigation
        Product/Service which is likely to contravene the above,
        you should discuss the same with your Institution so that
        they can seek our views on the same.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Limited Administrative Use</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        3.5 You may
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.5.1 incorporate the Ordnance Survey Licensed Data into
        mapping images for inclusion in printed promotional
        literature and/or publication on the world wide web for one
        or more of the following purposes:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) to demonstrate the extent and/or location of an
        Institution&#39;s campus and other fixed assets that are
        leased, owned or managed by that Institution;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) to show the location of an event organised by an
        Institution (which for the avoidance of doubt may be
        premises other than the actual campus of the Institution);
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) to provide directions and/or routes to the premises
        referred to in Clause 3.5.1 a) or the event referred to in
        sub-clause 3.5.1 b);
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        d) to promote or advertise the Digimap Service.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        provided that the mapping images included in such
        publications comply with the requirements of sub-clause
        5.1.4.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.5.2 incorporate mapping images for inclusion in video
        clips for publication on &#39;YouTube&#39;, and as
        screenshots taken from the Digimap Service, published on
        Your Twitter feed solely for the purpose of promoting,
        advertising or demonstrating the use of the Digimap
        Service, provided that the mapping images included in such
        publications comply with the requirements of Clause 5.1.4
        and Clause 6.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.5.3 we would draw your attention specifically to your
        obligations and the restrictions set out in sub-clause
        5.2.1, sub-clause 5.2.3, sub-clause 5.2.7, and sub-clause
        6.2
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        3.5.4 you are permitted to incorporate advertising,
        promotional content and /or sponsorship or business
        endorsement into the literature, and/or publications
        referred to this clause 3.5.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>4 Public Sector Data Sharing Rights</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        4.1 Under two agreements known as the Public Sector Mapping
        Agreement and the One Scotland Mapping Agreement, Ordnance
        Survey has granted PSMA Members and OSMA Members the right
        to supply Ordnance Survey Licensed Data to, and receive
        Ordnance Survey Licensed Data from, certain other Ordnance
        Survey licensees, subject to certain conditions. These
        &#39;sharing&#39; rights are referred to in the Public
        Sector Mapping Agreement and the One Scotland Mapping
        Agreement as the &#39;Public Sector Data Sharing&#39;
        provisions.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        4.2 With the exception of Points of Interest Data, You are
        entitled to supply copies of the Ordnance Survey Licensed
        Data to, and receive copies of the Ordnance Survey Licensed
        Data from, any PSMA or OSMA Member under the Public Sector
        Data Sharing provisions, subject to the following
        conditions:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.1 the Sharing Party must be licensed for the same area
        of coverage of the same Ordnance Survey Licensed Data being
        supplied and/or received;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.2 you shall obtain written confirmation from the
        Sharing Party that they hold a current PSMA Member Licence
        or OSMA Member Licence and that they are licensed for the
        same area of coverage of the same Ordnance Survey Licensed
        Data being supplied;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.3 the use of the Ordnance Survey Licensed Data received
        by you from the Sharing Party shall be Educational Use only
        and shall be governed by the terms of this Licence;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.4 the supply by you to the Sharing Party must be to
        support Educational Use; and/or delivery of the PSMA Member
        / OSMA Member&#39;s Core Business.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.5 you shall maintain a written record of:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) the names and addresses of Sharing Parties from whom you
        receive or to whom you supply Ordnance Survey Licensed
        Data;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) the Ordnance Survey Licensed Data which was received by
        you and/or supplied by you to the Sharing Parties; and
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) when the Ordnance Survey Licensed Data was received by
        you from and/or supplied by you to the Sharing Parties,
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        and you shall provide a copy of that written record to us
        on written request.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        4.2.6 subject to 11.8, Ordnance Survey shall have no
        obligation or liability to you in respect of any Ordnance
        Survey Licensed Data received from a PSMA Member or OSMA
        Member, or any Ordnance Survey Licensed Data supplied to a
        PSMA Member or OSMA Member.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>5 Your Obligations / Restrictions</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        5.1 You MUST:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.1.1 Keep your Secure Authentication credentials secure
        and confidential at all times, you must not share them with
        any other Authorised User or third party and you must take
        all reasonable steps to ensure that they are not cached or
        otherwise stored on any Device;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.1.2 notify the Institution that provided you with your
        Secure Authentication credentials immediately that you
        cease to qualify as an Authorised User;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.1.3 keep all copies of the Ordnance Survey Licensed Data
        that you have in your possession or control secure and
        maintain accurate records of when, where, to whom and in
        what format/media you have distributed copies of the
        Ordnance Survey Licensed Data;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.1.4 ensure that any mapping images that are included in
        Academic Works, Presentation Materials, Research Works and
        Teaching Materials, which are, or are likely to be,
        distributed or otherwise made available to persons who are
        not Authorised Users (including but without limitation by
        way of publication on the world wide web), shall:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) be in a Raster Format only;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) not be geo-referenced;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) be no larger (in scale, coverage area, number of
        features) than is necessary to fulfil the purpose for which
        the map is being used;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        d) include additional information on/alongside/with the map
        which facilitates the purpose for which the map is being
        used; and
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        e) you shall take adequate and technological measures to
        prevent third parties from being able to access, use and/or
        extract any Ordnance Survey Licensed Data from such
        materials/media.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.1.5 on request, provide full details and examples of how
        you are using the Ordnance Survey Licensed Data to Ordnance
        Survey, Jisc Collections, EDINA and/or your Institution
        (including full technical details of Educational Navigation
        Product/Service) for the purposes of our analysis of the
        Digimap Service and/or as evidence of compliance with the
        terms and conditions of this Licence .
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        5.2 You must NOT:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.1 use the Ordnance Survey Licensed Data for, or in
        connection with, any Commercial Activity or Competing
        Activity, (as defined in Appendix 1);
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.2 share, distribute, transfer, sub-licence or otherwise
        make the Ordnance Survey Licensed Data, or any materials /
        media incorporating Ordnance Survey Licensed Data,
        available to other people or organisations (even if they
        are Authorised Users), except as expressly set out in this
        Licence;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.3 display, distribute or otherwise use the Ordnance
        Survey Licensed Data (or any materials / media
        incorporating the Ordnance Survey Licensed Data) on any
        social networking or media sharing websites other than as
        expressly set out in Clause 3.5.2;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.4 incorporate the Ordnance Survey Licensed Data into
        any mobile application;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        5.2.5 make any more copies of the Ordnance Survey Licensed
        Data (be they electronic or printed copies) than is
        necessary to fulfil the specific purposes set out in Clause
        3;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.6 incorporate the Ordnance Survey Licensed Data into
        any materials or media which:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) carry any paid for or free advertising, (whether banner
        adverts, key word adverts, pop-up adverts or otherwise);
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) include promotional content;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) include sponsorship or business endorsement;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        d) solicit donations and resources in kind for charitable,
        non-profit making, community or volunteer groups or
        purposes;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        other than as expressly set out in sub-clause 3.5.5.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.7 incorporate the Ordnance Survey Licensed Data into
        any materials or media which is likely to cause harassment,
        alarm or distress to any person; or use the Ordnance Survey
        Licensed Data for any illegal, deceptive, misleading or
        unethical purposes or in a manner which may be detrimental
        to the reputation of Ordnance Survey or the Ordnance Survey
        Licensed Data;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.8 use the Ordnance Survey Licensed Data to assist an
        Institution with its estate management or other internal
        business administration, or display and promotion of their
        services, other than as expressly set out in sub-clause
        3.5;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.9 use the Points of Interest Data for any form of
        telephone sales, telephone marketing, direct mail, market
        research or use of circulation list or fax marketing
        (direct marketing), which is targeted at individuals or
        businesses, although this does not preclude the use of the
        Points of Interest Data for geographic analysis;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.10 use the Points of Interest Data for geocoding or
        correcting any gazetteer or address list or cleaning such
        data;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.11 supply or receive the Points of Interest Data under
        the Public Sector Data Sharing rights set out in Clause 4
        above.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        5.2.12 misuse the Ordnance Survey Licensed Data or Digimap
        Service by knowingly, or recklessly, introducing viruses,
        worms or any other material which is malicious or
        technologically harmful, nor attempt to gain unauthorised
        access to the Ordnance Survey Licensed Data or Digimap
        Service.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>6 Ownership and Acknowledgement of Intellectual
        Property Rights</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        6.1 The Intellectual Property Rights in the Ordnance Survey
        Licensed Data are owned by the Crown, or by Ordnance
        Survey&#39;s suppliers. Notwithstanding the licence granted
        to you under Clause 3, the Ordnance Survey Licensed Data
        remains the property of the Crown (or Ordnance Survey&#39;s
        suppliers) and your use and possession of the Ordnance
        Survey Licensed Data does not give you any title to or
        ownership of it.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        6.2 You must ensure that the following acknowledgement of
        copyright and database ownership is included in a
        conspicuous position on any display or reproduction of the
        Ordnance Survey Licensed Data, in any materials/media. This
        includes, without limitation, within any mapping images
        displayed on a Device screen from an Educational
        Navigational Product/Service or on screenshots for
        publication on any Twitter feed:
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        &copy; Crown Copyright and Database Right [insert date].
        Ordnance Survey (Digimap Licence)
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        The date to be inserted should be the then current year. So
        for example if you access the Licensed Data and incorporate
        it into hard copy materials on 18 September 2014, then the
        date to be inserted is &#39;2014&#39;)
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        6.3 Where Points of Interest Data is used you must also
        ensure that the following acknowledgement is shown in a
        conspicuous position on any display or reproduction of the
        Ordnance Survey Licensed Data, in any media:
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        This material includes data licensed from PointX&copy;
        Database Right/Copyright [year of supply or date of
        publication].
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        6.4 You must not tamper with, obscure, or remove any
        Intellectual Property Rights protection measures which
        appear on-screen on the Digimap Service or on any
        print-outs made using the Ordnance Survey Licensed Data.
        Protection measures include copyright and database
        acknowledgements, Trade Marks, trade mark notations &reg;
        or &trade; and any other Ordnance Survey or third party
        logos or proprietary notices;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        6.5 You must not use your own trade marks or branding on or
        in relation to the Ordnance Survey Licensed Data.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>7 Term</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        7.1 This EULA shall come into force on the date that you
        first click the &#39;Accept&#39; button or exercise any of
        the rights granted hereunder, whichever is the earlier;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        7.2 This EULA shall remain in full force and effect for the
        duration of your course of study (students), employment
        (members of staff) or engagement (consultants and
        contractors) with/to the Institution, unless terminated
        earlier as provided for in Clauses 8 and 9.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>8 Automatic Termination of this Licence</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        8.1 This Licence terminates automatically, without notice:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        8.1.1 when you cease to qualify as an Authorised User (as
        defined in Appendix 1). By way of example, this includes,
        without limitation:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) Where you are a student, when you finish your course of
        study or research with an Authorised Institution;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) Where you are a member of an Institution&#39;s staff,
        when your employment ceases;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) Where as a student or member of staff, you travel abroad
        for a period of study or employment at an overseas campus;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        d) Where you are a consultant or contractor engaged by an
        Institution, for the purposes of teaching or undertaking
        research, when the period necessary to fulfil that purpose
        ends, or when your contract terminates, or if the terms of
        your contract change so that you are no longer permitted to
        access the Institution&#39;s information services, or you
        otherwise cease to be engaged by the Institution for the
        purposes of teaching or undertaking research at the
        Institution, (whichever is earlier)
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        8.1.2 if the terms and conditions of this Licence change
        and you are notified of that change and you choose not to
        click accept the new Licence terms and conditions;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        8.1.3 if the Sub-Licence Agreement between Jisc Collections
        and your Institution terminates for any reason;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        8.1.4 twelve (12) months after this Licence comes into
        force, or 12 months after you last accessed the Digimap
        Service, if you have not responded to &#39;click
        accept&#39; the most recent terms and conditions to
        indicate your wish to continue being an Authorised User;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        8.1.5 if your Secure Authentication is disabled by EDINA or
        your Institution at the end of an Academic Year, or at any
        other time for any administrative or other reason;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        8.2 For the avoidance of doubt, where you are transferring
        as a student, or member of staff, or a consultant or
        contractor, from one Institution to another:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) you cannot take this Licence with you on transfer,
        instead your Licence will terminate automatically when you
        leave the first Institution (as referred to in sub-clause
        8.1.1 above);
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) if you wish to continue using Ordnance Survey Licensed
        Data, (and /or any materials / media incorporating Ordnance
        Survey Licensed Data) at your new Institution, you will
        need to enter into a new licence with Ordnance Survey
        through that new Institution (once they have provided you
        with Secure Authentication details).
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) in the event that you do not enter into a new licence
        through your new institution prior to leaving your old
        Institution, you will need to transfer all copies of
        Ordnance Licensed Data in your possession or control, and
        any and all materials/media that you have created which
        incorporate Ordnance Survey Data, to another Authorised
        User prior to your departure (as referred to in Clause
        10.1).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>9 Suspension and Termination Rights</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        9.1 Ordnance Survey may take such steps as it reasonably
        considers necessary, (which may include requiring you to
        amend your proposed or actual use of the Ordnance Survey
        Licensed Data, and ultimately suspending or terminating
        your Licence), if it reasonably suspects that your use of
        the Ordnance Survey Licensed Data falls outside of
        Educational Use or Limited Administrative Use (or the
        spirit of the rights granted and restrictions imposed under
        Educational Use or Limited Administrative Use).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        9.2 Ordnance Survey may terminate your Licence immediately
        on giving you written notice if it reasonably suspects
        that:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        9.2.1 you are in breach of any of the terms of this Licence
        and such breach is incapable of being remedied;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        9.2.2 you are in breach of any of the terms of this Licence
        and the breach, being remediable, is not remedied within
        thirty (30) days from the date of a written request to do
        so;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        9.2.3 you are persistently breaching this Licence;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        9.3 You may terminate this Licence by email or other
        written notice to EDINA.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>10 Effects of Termination</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        10.1 Where this Licence is due to terminate automatically
        under clause 8.1 above, then without prejudice to that
        Clause, you are entitled, for the purposes of continuity,
        to supply:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) your copies of the Ordnance Survey Licensed Data; and/or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) any Academic Works, Presentation Materials, Research
        Works and Teaching Materials incorporating Ordnance Survey
        Licensed Data which you have developed as part of your
        Educational;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) control of any Educational Navigation Products/Services
        which you have developed;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        to other Authorised Users of both the same and/or a
        different Institution prior to your departure and the
        consequential termination of this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        10.2 If this Licence is suspended, terminated, or expires
        for any reason whatsoever, then subject to Clauses 10.1 and
        10.3:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.2.1 your right to access and use the Ordnance Survey
        Licensed Data is immediately suspended or terminated and
        you must immediately cease accessing/using the Digimap
        Service and Ordnance Survey Licensed Data.
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.2.2 you shall within seven (7) days of such termination
        destroy all copies of the Ordnance Survey Licensed Data
        within your possession or control (including any Ordnance
        Survey Licensed Data which has been embedded within any
        Academic Works, Presentation Materials, Research Works or
        Teaching Materials that you have developed pursuant to
        Clause 3, and any Ordnance Survey Licensed Data embedded
        within your own);
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.2.3 you shall within seven (7) days of such termination
        remove any Educational Navigation Products/Services that
        you have developed pursuant to Clause 3 from the platforms
        on which they are hosted and destroy any Ordnance Survey
        Licensed Data which has been embedded in such media.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        10.3 You are entitled to retain the following:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.3.1 printed copies of any Academic Works, Presentation
        Materials, Research Materials and Teaching Materials,
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.3.2 printed screenshots of any Educational Navigation
        Products/Services;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.3.3 mapping images embedded within any electronic copies
        of Academic Works, Presentation Materials, Research Works
        and Teaching Materials (which have been developed by you or
        received by you from others), provided that such mapping
        images are in a Raster Format and not geo-referenced;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        10.3.4 mapping images embedded within any Educational
        Navigation Product/Service (which have been developed by
        you), provided that such mapping images are in a Raster
        Format and not geo-referenced;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        for use solely in accordance with the terms of this
        Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        10.4 For the avoidance of doubt, you are not required to
        secure the destruction of any copies of your Academic
        Works, Presentation Materials, Research Works or Teaching
        Materials which have been published, distributed,
        deposited, or otherwise made available to others pursuant
        to Clause 3.10.5
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        Any provision of this Licence which expressly or by
        implication is intended to continue in force following
        termination of this Licence shall remain in full force and
        effect.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>11 Warranties and Limitations of Liability</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.1 Ordnance Survey warrants to you that it is authorised
        to grant you a licence to use the Ordnance Survey Licensed
        Data and, subject to Clause 11.2, your use of the Ordnance
        Survey Licensed Data will not infringe the copyright and/or
        database rights of any third party.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.2 The warranty set out in Clause 11.1 shall not apply to
        the extent that:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.2.1 there is any modification or addition made to the
        Ordnance Survey Licensed Data, (other than by Ordnance
        Survey);
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.2.2 the Ordnance Survey Licensed Data is combined with
        any other data not supplied by Ordnance Survey;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.2.3 the Ordnance Survey Licensed Data is used other than
        in accordance with this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.3 You acknowledge that the Ordnance Survey Licensed Data
        has not been created for your individual requirements,
        (whether operationally, functionally, technically,
        accurately or otherwise) and it is therefore your
        responsibility to ensure that the Ordnance Survey Licensed
        Data is fit for your intended use or purpose. In this
        respect, (but subject to Clause 11.8), Ordnance Survey
        excludes to the fullest extent permissible by law, all
        express and implied warranties relating to the Ordnance
        Survey Licensed Data, including but not limited to,
        satisfactory quality and fitness for purpose.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.4 Nothing in this Licence shall limit your liability in
        respect of:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.4.1 any infringement of our Intellectual Property Rights
        by you; or
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.4.2 any infringement of our Intellectual Property Rights
        by a third party which has obtained Ordnance Survey
        Licensed Data as a result of your failure to comply with
        your obligations under sub-clause 5.1.1, or sub-clause
        5.2.2
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.5 You indemnify Ordnance Survey and keep us indemnified
        against all claims, demands, actions, costs, expenses
        (including but not limited to full legal costs and
        disbursements), losses and damages arising from or incurred
        by reason of your acts or omissions or breaches of this
        Licence, including but not limited to your liabilities
        under Clause 11.4 above.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.6 Subject to Clause 11.8, nothing in this Licence shall
        make Ordnance Survey liable, whether in contract, tort
        (including negligence, pre-contractual or other
        representations), or otherwise, for any loss or damage
        suffered by you of whatsoever nature arising from or in
        connection with any use of the Ordnance Survey Licensed
        Data, or from any delay, interruption or failure of any
        electronic transmission of the Digimap Service.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.7 Subject to Clause 11.5, nothing in this Licence shall
        make either party liable to the other, whether in contract,
        tort (including without limitation negligence,
        pre-contractual or other representations) or otherwise for
        any indirect, special or consequential loss or damage
        (including loss of income, loss of business profits or
        contracts, loss of information, loss of opportunity,
        goodwill or reputation, or loss of, damage to or corruption
        of data).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        11.8 Nothing in this Licence shall exclude or limit the
        liability of either party for:
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.8.1 death or personal injury resulting from negligence;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.8.2 fraud or fraudulent misrepresentation;
      </p>
      <p class="sub1" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 20px;">
        11.8.3 the deliberate default or wilful misconduct of that
        party.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>12 General</strong>
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.1 The Ordnance Survey Licensed Data may be modified,
        enhanced, replaced, withdrawn or additions made at any
        time.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.2 The terms of this Licence may be amended at any time.
        All such changes shall become incorporated into this
        Licence immediately and shall apply to you with effect from
        the start of any subsequent session that you sign in and
        use the Ordnance Survey Licensed Data through the Digimap
        Service.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.3 Ordnance Survey is entitled to assign, transfer or
        novate the benefits and obligations of this Licence. You
        are not entitled to subcontract, assign, transfer or novate
        rights and/or obligations under this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.4 If Ordnance Survey has a right arising from your
        breach of this Licence and it fails to exercise or delay in
        exercising that right, such delay or failure shall not
        constitute a waiver of that or any other right.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.5 With the exception of the Controller of Her
        Majesty&#39;s Stationary Office (who shall have the right
        to enforce the terms of this Licence against you), which
        you hereby acknowledge), a person who is not a party to
        this Licence has no right under the Contracts (Rights of
        Third Parties) Act 1999 to enforce or enjoy the benefit of
        any terms of this Licence.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.6 This Licence constitutes the entire agreement and
        understanding between the parties concerning its subject
        matter.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        12.7 This Licence will be governed by and construed in
        accordance with English law and both parties submit to the
        exclusive jurisdiction of the English courts in respect of
        any proceedings issued in connection with this Licence.
      </p>
      <h1>
        Appendix 1 to Schedule 5 - Definitions
      </h1>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        Capitalised terms used in this Licence have the following
        meanings:
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Academic Year</strong> means a year commencing on
        1st August and ending on 31 July of the following year.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Academic Works</strong> means coursework,
        assignments, portfolios, theses, dissertations, and other
        similar materials generated by students and members of
        staff as part of their academic research, study, teaching
        and learning;
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Authorised Data Handler</strong> means an
        individual who:
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        a) is authorised by Ordnance Survey to handle the Ordnance
        Survey Licensed Data on an Authorised User&#39;s behalf for
        the purposes of loading and storing such Ordnance Survey
        Licensed Data onto a secure data service provided by a UK
        Higher Education or Further Education Institution
        (irrespective of whether such institution is an
        Institution), (for example the Secure Data Service provided
        by the University of Essex) and allowing an Authorised User
        to interact with the Ordnance Survey Licensed Data on and
        via that secure data service; and
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        b) has entered into a Digimap Data Handler Agreement with
        Ordnance Survey and that agreement remains in force.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Authorised User(s)</strong> means an individual
        who:
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        A is authorised by an Institution to have access to its
        information services (whether on-site or off-site) via
        Secure Authentication; and who
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        B has completed EDINA&#39;s registration process for the
        Digimap Service and has click accepted the terms of this
        Licence; and who is either:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        i) a current student of an Institution; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        ii) a member of staff (whether permanent or temporary,
        including retired members of staff); or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        iii) a consultant or contractor who is engaged by an
        Institution for the purposes of teaching students of that
        Institution and/or undertaking academic research with that
        Institution, whose contract permits them to access the
        Institution&#39;s information services,
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        provided that:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) Students and members of staff do not qualify as
        Authorised Users for the duration of any extended period of
        study or teaching abroad at an overseas campus of an
        Institution, where extended period means any period of one
        academic term or longer;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) Students and members of staff who are registered at an
        overseas campus of an Institution do not qualify as
        &#39;Authorised Users&#39; of that Institution whilst they
        are overseas (studying or otherwise), but they will qualify
        as Authorised Users for the duration of any period spent
        studying in the UK at the Institution.
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) Consultants or contractors engaged by an Institution for
        the purposes of teaching or undertaking research shall only
        qualify as Authorised Users for the period necessary to
        fulfil that purpose (for example, for the period necessary
        to prepare, undertake and deliver the teaching and/or
        research).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>BIS</strong> means the Secretary of State for
        Business Innovation and Skills.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Commercial Activity</strong> means the supply
        and/or use of the whole or parts of the Ordnance Survey
        Licensed Data for the purpose of monetary reward or
        money&#39;s worth (whether by or for an Institution or an
        Authorised User) by means of the sale, resale, loan,
        transfer, hire or other form of exploitation of the
        Ordnance Survey Licensed Data.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        For the avoidance of doubt, where a commercial organisation
        provides a grant, sponsorship or other funding to you
        and/or your Institution (for example, but without
        limitation, where a commercial organisation funds: (i) the
        building of a university laboratory, (ii) a student&#39;s
        course of study; or (iii) a particular research project),
        this does not constitute a Commercial Activity, provided
        that:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) the commercial organisation is not providing the grant,
        sponsorship or other funding for the purpose of funding
        commercial research; and/or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) the commercial organisation is not commercially
        exploiting any materials generated by you; and/or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) where you or your Institution are obliged, or wish, to
        supply the commercial organisation with a copy of any
        materials generated by you or them, and such materials
        include copies of the Ordnance Survey Licensed Data, the
        materials being supplied to the commercial organisation
        shall:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        &nbsp;&nbsp;&nbsp;i. be in printed form, or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        &nbsp;&nbsp;&nbsp;ii. be in electronic form with mapping
        images that are in a Raster Format only and not
        geo-referenced, or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        &nbsp;&nbsp;&nbsp;iii be in an electronic format with
        mapping images that are in a Vector Format only if the
        commercial organisation has its own licence to use the
        Ordnance Survey Licensed Data and such licence is for
        non-commercial purposes.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Competing Activity</strong> means any activity by
        you which:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) competes with or substitutes an activity of a third
        party that is licensed for Ordnance Survey Licensed Data;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) is reasonably likely to compete with or substitute an
        activity of a third party that is licensed or to be
        licensed for Ordnance Survey Licensed Data; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) competes with, or substitutes, or is reasonably likely
        to compete with or substitute, the products and/or services
        of Ordnance Survey.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Core Business</strong> means any public sector
        activity in central or local government and health
        services, excluding any Commercial Activities and/or
        Competing Activities.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Data</strong> means any text, graphics, image,
        audio and/or visual material, software, data, database
        content or other multimedia content, information or
        material.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Device</strong> means a personal computer (being a
        desktop, laptop, tablet computer or handheld PC), smart
        phone or other mobile telephone device, navigational device
        or other electronic device designed for use by a single
        user at any one time.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Digimap Data Handler Agreement</strong> means a
        licence agreement between Ordnance Survey and an Authorised
        Data Handler in a form to be drafted by Ordnance Survey,
        setting out the terms on which an Authorised Data Handler
        can access and use the Ordnance Survey Licensed Data on
        behalf of an Authorised User, executed pursuant to
        sub-clause 3.1.4.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Digimap Service</strong> means the on-demand web
        map and data delivery and download service provided by
        EDINA through which you are able to access the Ordnance
        Survey Licensed Data.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>EDINA</strong> means the Jisc designated centre for
        digital expertise and online services delivery which is
        based in the University of Edinburgh, located at
        Causewayside House, 160 Causewayside, EDINBURGH, Scotland,
        UK, EH9 1PR.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Educational Navigation Product / Service</strong>
        means an electronic product and/or service (including a web
        based application) which may be used on a Device and which
        provides an end user with turn by turn instructions on how
        to get to a destination, and such instructions are based on
        and are automatically updated to reflect the Device&#39;s
        position and movement during the journey, and which is
        developed as part of your Educational Use.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Educational Use</strong> means use for the purpose
        of teaching, learning, academic and sponsored research
        and/or private study by Authorised Users within, or in
        connection with, an Institution. (For the avoidance of
        doubt, it includes distance learning).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Eligible Body/ Bodies</strong> means:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) a body which falls within the definition of a
        &#39;contracting authority&#39; in Regulation 3 of the
        Public Contracts Regulations 2006 or Regulation 3 of the
        Public Contracts (Scotland) Regulations 2012, excluding (i)
        the Excluded Bodies, and (ii) any Infrastructure Body; and
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) any additional bodies which the parties agree from time
        to time are to be treated as Eligible Bodies, including at
        the date of this Agreement, those bodies listed in (i)
        Appendix 4 of the One Scotland Mapping Agreement; and (ii)
        Schedule 8 of the Public Sector Mapping Agreement.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Excluded Bodies</strong> means:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) save where the body is listed in Appendix 4 of the One
        Scotland Mapping Agreement or Schedule 8 of the Public
        Sector Mapping Agreement, or BIS and Ordnance Survey
        otherwise agree, any public or private limited company
        (including whether limited by shares or guarantee);
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) any registered social landlord within the meaning of
        Part 2 of the Housing (Scotland) Act 2010,or any private
        registered provider of social housing, which shall have the
        meaning ascribed thereto in section 80 of the Housing and
        Regeneration Act 2008; and
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) any other body as may be agreed by Ordnance Survey and
        BIS from time to time.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Infrastructure Body</strong> means:
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        a) a body which falls within the definition of
        &#39;utility&#39; in Regulation 2 of the Utilities
        Contracts Regulations 2006 or Regulation 2 of the Utilities
        Contracts (Scotland) Regulations 2012;
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        b) a body which is a provider of a &#39;Public Electronic
        Communications Network&#39; as defined in the General
        Conditions of Entitlement set by the Office of
        Communications under section 45 of the Communications Act
        2003; or
      </p>
      <p class="sub" style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;margin-left: 60px;">
        c) any other entity as may be agreed by the parties from
        time to time as being an infrastructure body, as published
        on Ordnance Survey&#39;s website.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Jisc Collections</strong> means Jisc Collections
        and Janet Limited (company registration number 2881024)
        whose registered office is at Lumen House, Library Avenue,
        Harwell Oxford, DIDCOT, Oxfordshire, OX11 OSG (trading as
        Jisc Collections).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Institution</strong> means a UK higher education
        institution, further education institution, or UK research
        council which has subscribed to the Digimap Service and
        entered into a Sub-Licence Agreement with Jisc Collections
        (for as long as such Sub-Licence Agreement remains in
        force).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Intellectual Property Rights</strong> means
        copyright, patent, trade mark, design right, topography
        right, database rights, trade secrets, know-how, rights of
        confidence, broadcast rights and all other similar rights
        anywhere in the world whether or not registered and
        including applications for registration of any of them.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Limited Administrative Use</strong> means limited
        use of the Ordnance Survey Licensed for internal
        administrative purposes within an Institution as more
        particularly described in Clause 3.5.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>One Scotland Mapping Agreement</strong> or
        <strong>OSMA</strong> means the agreement between Ordnance
        Survey and Scottish Ministers signed on 31 March 2009 (as
        varied from time to time) in connection with the licensing
        of data and supply of services to the public sector in
        Scotland, a copy of which is available to view on the
        Ordnance Survey website.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Ordnance Survey Licensed Data</strong> means the
        Data listed in Appendix 2 together with (i) any other
        mapping and other geographical Data which is made available
        to you through the Digimap Service;(ii) any copies of the
        Ordnance Survey Licensed Data received by you from other
        Authorised Users pursuant to Clauses 3 and 10.1; (iii) any
        copies of the Ordnance Survey Licensed Data received by you
        from a PSMA Member or OSMA Member pursuant to Clause 4; and
        (iv) any and all updates, revisions and amendments to such
        Data); but excluding all OS OpenData.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>OSMA Member</strong> means an Eligible Body which
        has entered into an OSMA Member Licence and whose licence
        has not expired, nor been terminated or suspended.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>OSMA Member</strong> Licence means the licence
        agreement which sets out the terms on which Public Bodies
        may use the geographical datasets which Ordnance Survey
        makes available to the public sector under the One Scotland
        Mapping Agreement (as varied from time to time). The OSMA
        Member Licence is attached as an appendix to the One
        Scotland Mapping Agreement and a copy of the current
        version can be found on the public sector pages of the
        Ordnance Survey Website, which at the time of signature of
        this agreement can be found at the following url: <a href="http://www.ordnancesurvey.co.uk/business-and-government/public-sector/mapping-agreements/osma-licensing.html" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/business-and-government/public-sector/mapping-agreements/osma-licensing.html</a>.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>OS OpenData</strong> means the Data which Ordnance
        Survey makes freely available, for personal and commercial
        use, without restriction, under a permissive licence known
        as the OS OpenData Licence. The OS OpenData datasets are
        those identified as such in Appendix 2, together with any
        other Ordnance Survey datasets that Ordnance Survey
        releases under the OS OpenData Licence in the future.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>OS OpenData Licence</strong> means the licence
        terms available at <a href="http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf</a>.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Points of Interest Data</strong> means Data which
        Ordnance Survey has licensed from PointX.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>PointX</strong> means PointX Limited (Company
        registration number: 04171543) of 7 Abbey Court, Eagle Way,
        Sowton, EXETER, EX2 7HY.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Presentation Materials</strong> means works
        generated by you for or in connection with a conference,
        seminar, workshop or other similar activity which you are
        presenting or facilitating at. For the avoidance of doubt,
        Presentation Materials includes academic posters.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>PSMA Member</strong> means an Eligible Body which
        has entered into a PSMA Member Licence and whose licence
        has not expired, nor been terminated or suspended.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>PSMA Member Licence</strong> means the licence
        agreement which sets out the terms on which Public Bodies
        may use the geographical datasets which Ordnance Survey
        makes available to the public sector under the Public
        Sector Mapping Agreement (as varied from time to time). The
        PSMA Member Licence is attached as an appendix to the
        Public Sector Mapping Agreement and a copy of the current
        version can be found on the public sector pages of the
        Ordnance Survey Website, which at the time of signature of
        this agreement can be found at the following url: <a href="http://www.ordnancesurvey.co.uk/business-and-government/public-sector/mapping-agreements/psma-licensing.html" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/business-and-government/public-sector/mapping-agreements/psma-licensing.html</a>.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Public Sector Data Sharing</strong> has the meaning
        given in Clause 4.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Public Sector Mapping Agreement</strong> or
        <strong>PSMA</strong> means the agreement between Ordnance
        Survey and BIS in connection with the licensing of data and
        supply of services to the public sector in England and
        Wales, a copy of which can be viewed on Ordnance
        Survey&#39;s website.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Raster Format / Image(s)</strong> means a mapping
        image made up of millions of individual pixels in a grid,
        where the information stored within each pixel corresponds
        to the colour of that pixel only and such information is
        not referenced to the information within any other pixel.
        Otherwise known as a bitmap and/or a static map image, a
        raster image has no &#39;intelligence&#39;.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Research Works</strong> means research papers,
        journal articles, and other similar materials generated as
        a result of academic research for the purpose of allowing
        you the author to communicate the results of your scholarly
        work, establish priority for discoveries and build their
        reputation amongst your peers.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Secure Authentication</strong> means access to the
        Ordnance Survey Licensed Data by UK Access Management
        Federation compliant technology, Internet Protocol (IP)
        ranges or by any other means of authentication agreed
        between Ordnance Survey and Jisc Collections from time to
        time.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Sharing Party</strong> means the PSMA or OSMA
        Member to whom the Ordnance Survey Licensed Data is
        supplied or received pursuant to Clause 4.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Teaching Materials</strong> means teaching notes,
        aids and other materials; student course notes; study
        packs, and other similar materials; all generated for use
        in the course of teaching or learning (including teacher
        training) within the Institution.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Trade Marks</strong> means Ordnance Survey&#39;s
        trade marks, whether registered or unregistered, including
        without limitation the names Ordnance Survey and OS, and
        the OS Logo.
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>UK Higher Education and/or Further Education
        Institution(s)</strong> means a higher and/or further
        education institution in the United Kingdom providing
        post-compulsory education, (distinct from the education
        offered in secondary schools).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        <strong>Vector Image / Format</strong> means a
        representation of the mapping made up of individual,
        geographic or cartographic features comprising, but not
        limited to, points, lines, areas and attributes, (including
        cartographic text), relating to the real world. In contrast
        to a Raster Image, vector data is a flexible and
        intelligent form of data which can be edited, modified and
        scaled without affecting the basic feature itself.
      </p>
      <h1>
        Appendix 2 to Schedule 5 - Ordnance Survey Data
      </h1>
      <h2 style="font-family: Verdana, Arial, sans-serif;font-weight: bold;font-size: 110%;">
        Part A - Licensed Data
      </h2>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        The Ordnance Survey Licensed Data consists of the following
        products:
      </p>
      <ul style="font-family: Verdana, Arial, sans-serif;margin-top: 10px;margin-bottom: 10px;list-style: disc outside none;">
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS MasterMap&reg; Topography Layer
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS MasterMap&reg; Integrated Transport Network&trade;
        (ITN) Layer
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS MasterMap&reg; Integrated Transport Network&trade;
        (ITN) Layer - Urban Paths Theme
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS VectorMap&reg; Local
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS VectorMap&reg; Local Black and White Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS VectorMap&reg; Local Colour Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS VectorMap&reg; Local Backdrop Colour Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">1:25 000 Scale Colour Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">1:50 000 Scale Colour Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Code-Point&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Code-Point&reg; with polygons
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Land-Line&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Land-Line.Plus&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Points of Interest
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS Terrain&reg; 5
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">1:10 000 Scale Raster (for the period of the Licence
        Term up to and including 31 March 2016)
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Land-Form PROFILE&reg; (for the period of the Licence
        Term up to and including 30 September 2016)
        </li>
      </ul>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        The Licensed Data shall also include:
      </p>
      <ul style="font-family: Verdana, Arial, sans-serif;margin-top: 10px;margin-bottom: 10px;list-style: disc outside none;">
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Any and all Ordnance Survey Data which is received from
        a PSMA Member and/or OSMA Member pursuant to Clause 4. (For
        the avoidance of doubt, such Ordnance Survey Data may be
        incorporated within and form part of a PSMA Member&#39;s /
        OSMA Member&#39;s own data product). Authorised Users shall
        record full details of any Ordnance Survey Data they
        receive pursuant to Clause 4
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Any mapping images of Ordnance Survey Data (in digital
        or hard copy) which are provided by Ordnance Survey to Jisc
        Collections or EDINA.
        </li>
      </ul>
      <h2 style="font-family: Verdana, Arial, sans-serif;font-weight: bold;font-size: 110%;">
        Part B - OS OpenData
      </h2>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        The following datasets constitute OS OpenData datasets and
        may be included in the Digimap Service. These datasets,
        together with any other datasets which Ordnance Survey
        releases as OS OpenData in the future, are not subject to
        the restrictions of this EULA, but are licensed under the
        OS OpenData Licence terms which are available to view at
        <a href="http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/docs/licences/os-opendata-licence.pdf</a>
        (or such other replacement url).
      </p>
      <p style="font-family: Verdana, Arial, sans-serif;margin-top: 0px;font-size: 90%;margin-bottom: 12px;">
        A current list of OS OpenData products can be viewed at
        <a href="http://www.ordnancesurvey.co.uk/business-and-government/products/opendata-products.html" style="color: #3366FF;">
        http://www.ordnancesurvey.co.uk/business-and-government/products/opendata-products.html</a>.
      </p>
      <ul style="font-family: Verdana, Arial, sans-serif;margin-top: 10px;margin-bottom: 10px;list-style: disc outside none;">
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS VectorMap&reg; District
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Land-Form PANORAMA&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">1:250 000 Scale Colour Raster
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">1:50 000 Scale Gazetteer
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Boundary-Line&trade;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Code-Point&reg; Open
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Meridian&trade; 2
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">MiniScale&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS Locator&trade;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS Street View&reg;
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">OS Terrain&reg; 50
        </li>
        <li style="color: #000000;display: list-item;float: none;font-size: 90%;">Strategi&reg;
        </li>
      </ul>
    </div>
  `,
  help: {
    left: {
      text: "Help",
      link: "/webhelp/os/osdigimaphelp.htm"
    },
    right: {
      text: "FAQ",
      link: "/webhelp/os/osdigimaphelp.htm#getting_started/common_faqs.htm"
    }
  },
  apps: [{
    id: "OSMAPPER",
    name: "OS Roam",
    link: "/roam/os",
    description: "View, annotate and print OS maps at user defined scales",
    infoContent: `
      <p class="help-text">
        Roam allows you to view Ordnance Survey maps at various fixed scales from 1:500 to 1:8,000,000. Some views allow feature customisation. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, point, lines and areas)</li>
        <li>include scale bars and grid lines on printed maps</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `
  }, {
    id: "DATADOWNLOAD",
    name: "OS Data Download",
    link: "/datadownload/osdownload",
    description: "Download multiple OS data products for use in GIS/CAD",
    infoContent: `
      <p class="help-text">
        Data Download allows you to select and download Ordnance Survey data for use in GIS or CAD software.
        Select an area of interest and take one or more Ordnance Survey mapping data products for that area.
      </p>

      <ul class="help-list">
        <li>order updates to your existing data holding</li>
        <li>download previous versions of data for some products</li>
      </ul>
    `,
    ipAccessRestricted: true
  }, {
    id: "GAZETTEERQUERY",
    name: "Gazetteer Query",
    link: "/gaz-simple/GazetteerSimpleSearch.jsp?useJS=true",
    description: "Search for placenames and view their locations",
    infoContent: `
      <p class="help-text">
        Gazetteer Query is a simple interface for retrieving information about place names.
        Searches return the following attributes: county, grid coordinates and feaure type.
      </p>

      <ul class="help-list">
        <li>uses Ordnance Survey's 1:50 000 Scale Gazetteer </li>
        <li>database is updated annually</li>
        <li>limit searches to feature types</li>
        <li>location map available for each place name</li>
      </ul>
    `
  }, {
    id: "GAZETTEERPLUS",
    name: "Gazetteer Plus",
    link: "/gaz-plus/GazetteerPlus.jsp?useJS=true",
    description: "Download placename records",
    infoContent: `
      <p class="help-text">
        Gazetteer Plus allows you to select and download subsets of place name data
        from Ordnance Survey's 1:50 000 Scale Gazetteer.
      </p>

      <ul class="help-list">
        <li>limit searches by name, feature type, area or bounding box</li>
        <li>select from 20 different attributes to return</li>
        <li>download search results as text or XML document</li>
      </ul>
    `
  }, {
    id: "POSTCODEQUERY",
    name: "Postcode Query",
    link: "/cdptquery/servlet/Query?useJS=true",
    description: "Look up information about specific postcodes",
    infoContent: `
      <p class="help-text">
        Postcode Query is a simple interface for retrieving information about postcodes.
        Attributes returned for postcodes inlclude: domestic and business delivery points,
        region, ward and grid coordinates.
      </p>

      <ul class="help-list">
        <li>view the postcode boundary on a map </li>
        <li>database is updated annually</li>
      </ul>
    `
  }]
}, {
  id: "historic",
  name: "Historic",
  icon: `
    <svg x="0px" y="0px" width="68.029px" height="68.029px" viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029">
      <path d="M54.867,24.929c5.514,0,9.984-4.473,9.984-9.985c0-5.515-4.471-9.985-9.984-9.985c-0.147,0-0.291,0.012-0.436,0.021
        c-0.081-0.949-0.867-1.695-1.838-1.695H16.599c-0.925,0-1.685,0.678-1.824,1.564c-0.07-0.001-0.137-0.01-0.208-0.01
        c-5.515,0-9.985,4.469-9.985,9.984s4.471,9.984,9.985,9.984c0.465,0,0.918-0.042,1.366-0.104v29.949
        c-2.723,0.338-4.835,2.658-4.835,5.473c0,3.049,2.472,5.52,5.519,5.52h37.527c3.048,0,5.518-2.471,5.518-5.52
        c0-3.004-2.4-5.443-5.39-5.512V24.9C54.47,24.911,54.666,24.929,54.867,24.929z M26.702,48.431c0,1.748-1.418,3.166-3.166,3.166
        c-1.75,0-3.166-1.418-3.166-3.166v-26.66c-1.145,0.744-2.44,1.249-3.832,1.456c-0.477,0.068-0.951,0.104-1.425,0.104
        c-2.05,0-4.037-0.656-5.712-1.899c-1.699-1.261-2.804-3.107-3.113-5.201c-0.308-2.091,0.216-4.179,1.477-5.878
        c2.159-2.906,6.28-3.514,9.184-1.356c2.426,1.802,2.935,5.24,1.133,7.667c-1.518,2.041-4.412,2.469-6.452,0.951l1.36-1.832
        c1.031,0.766,2.494,0.551,3.26-0.48c1.051-1.414,0.756-3.423-0.66-4.473c-1.896-1.41-4.584-1.012-5.992,0.885
        c-0.898,1.209-1.271,2.695-1.052,4.184c0.222,1.49,1.008,2.807,2.216,3.703c1.572,1.168,3.507,1.656,5.444,1.368
        c1.938-0.286,3.647-1.31,4.815-2.882l0.053,0.039c0.58-0.725,1.462-1.197,2.463-1.197c1.748,0,3.166,1.416,3.166,3.164V48.431z
        M38.425,47.822c0,1.814-1.446,3.289-3.229,3.289s-3.229-1.475-3.229-3.289V19.927c0-1.815,1.446-3.289,3.229-3.289
        s3.229,1.474,3.229,3.289V47.822z M54.24,22.853c-0.473,0-0.948-0.035-1.425-0.105c-1.327-0.196-2.57-0.662-3.677-1.352v26.521
        c0,1.748-1.414,3.166-3.162,3.166c-1.75,0-3.168-1.418-3.168-3.166V19.579c0-1.749,1.418-3.167,3.168-3.167
        c1.242,0,2.306,0.724,2.823,1.766c1.135,1.25,2.654,2.064,4.35,2.313c1.938,0.286,3.871-0.2,5.443-1.367
        c1.209-0.899,1.995-2.212,2.217-3.704c0.219-1.488-0.153-2.975-1.052-4.185c-1.408-1.894-4.097-2.292-5.99-0.886
        c-1.419,1.054-1.714,3.062-0.664,4.477c0.767,1.029,2.229,1.246,3.262,0.48l1.359,1.831c-2.04,1.517-4.934,1.089-6.45-0.952
        c-1.802-2.426-1.295-5.865,1.131-7.666c2.904-2.158,7.024-1.549,9.183,1.357c1.262,1.696,1.786,3.785,1.478,5.877
        c-0.31,2.094-1.415,3.939-3.113,5.201C58.279,22.199,56.29,22.853,54.24,22.853z"/>
    </svg>
  `,
  description: "Historic Digimap offers a range of historical OS mapping data products from 1843 to 1996.",
  subscriptionRequired: true,
  licenceUrl: "/webhelp/historic/copyright/licence_agreement.htm",
  licence: `
 <div class="licence-text">
  <h2>LANDMARK HISTORIC MAP DATA SUB-LICENCE AGREEMENT (2012 - 2013)</h2>
  <p>THE JISC CONTENT PROCUREMENT COMPANY LIMITED (TRADING AS JISC COLLECTIONS), a
   company incorporated in England and Wales and limited by guarantee whose registered
   office is at Ground Floor, Brettenham House South, Lancaster Place, London WC2E
   7EN (&quot;JISC Collections&quot;).</p>
  <p>OFFERS to you, the Sub-Licensee, the permission to access and use the Licensed
   Work on the terms and conditions as set out in this Sub-Licence. Upon completion
   of the Subscription Order and Acceptance Form (as hereafter defined) as part
   of the JISC Collections Online Ordering Service your institution will become
   a non-exclusive Sub-Licensee of JISC Collections.</p>
  <p>Acceptance of this Sub-Licence will be by receipt of the Order Confirmation Email
   (JISC Collections) (as hereafter defined) by JISC Collections as part of the
   JISC Collections Online Ordering Service. Acceptance shall be acceptance of
   all terms of this Sub-Licence and no variation or counter offer will be accepted
   by JISC Collections. In the event that no or partial compliance is made as to
   the manner or form described for acceptance, no sub-licence will be granted
   and this offer is deemed withdrawn.</p>
  <p>
   <strong>RECITALS</strong>
  </p>
  <p>
   <strong>WHEREAS</strong> the Landmark Historic Map Data is a digital archive of historical
   archive of town plans, county series and post-war national grid mapping;</p>
  <p>
   <strong>AND WHEREAS</strong> the Landmark Historic Map Data and all Intellectual Property
   Rights (as hereafter defined) therein are owned by or licensed to Landmark Information
   Group Limited;</p>
  <p>
   <strong>AND WHEREAS</strong> by an agreement between Landmark Information Group Limited
   and JISC Collections (the &quot;Landmark Historic Map Data Supply and Licence
   Agreement&quot;), JISC Collections is permitted to sub-license the access and
   use of Landmark Historic Map Data to Sub-Licensees in accordance with the terms
   of this Sub-Licence;</p>
  <p>
   <strong>AND WHEREAS</strong>
  </p>
  <p>HEFCE AND THE SUB-LICENSEE AGREE AS FOLLOWS:</p>
  <h3>1.DEFINITIONS</h3>
  <p>1.1 In this Sub-Licence, the following expressions shall have the following meanings:</p>
  <p>&quot;Authorised Users&quot;</p>
  <p>means individuals who are authorised by the Sub-Licensee to access the Sub-Licensee&rsquo;s
   information services whether on-site or off-site via Secure Authentication and
   who are affiliated to the Sub-Licensee as a current student, faculty member
   or employee of the Sub-Licensee. Persons who are not a current student, faculty
   member or an employee of the Sub-Licensee, but who are permitted to access the
   Sub-Licensee&rsquo;s information services from computer terminals within the
   Library Premises [&quot;Walk-In Users&quot;] are also deemed to be Authorised
   Users, only for the time they are within the Library Premises. Walk-In Users
   may not be given means to access the Licensed Work when they are not within
   the Library Premises.</p>
  <p>&quot;Commercial Use&quot;</p>
  <p>means the use of the whole or parts of the Licensed Work for any reason which
   generates a profit.</p>
  <p>&quot;Educational Purposes&quot;</p>
  <p>means for the purpose of education, teaching, distance learning, private study
   and/or research.</p>
  <p>&quot;Fee&quot;</p>
  <p>means the fee as set out in Schedule 1.</p>
  <p>&quot;Intellectual Property Rights&quot;</p>
  <p>means patents, trademarks, trade names, design rights, copyright (including rights
   in computer software and moral rights), database rights, rights in know-how
   and other intellectual property rights, in each case whether registered or unregistered
   and including applications for the grant of any of the foregoing and all rights
   or forms of protection having equivalent or similar effect to any of the foregoing
   which may subsist anywhere in the world.</p>
  <p>&quot;Library Premises&quot;</p>
  <p>means the physical premises of the library or libraries operated by the Sub-Licensee.</p>
  <p>&quot;Licensed Work&quot;</p>
  <p>means the collection of Licensor&rsquo;s digital map data products which is known
   to the parties as &quot;Landmark Historic Map Data&quot; comprising the products
   as listed in Schedule 2.</p>
  <p>&quot;Order Confirmation Email (JISC Collections)&quot;</p>
  <p>means the email to JISC Collections, automatically generated by the JISC Online
   Ordering Service after the Sub-Licensee has completed the Subscription Order
   and Acceptance Form, confirming that the Sub-Licensee has placed the order,
   the start and end date of the subscription period and that the Sub-Licensee
   has agreed to the terms and conditions of the Sub-Licence.</p>
  <p>&quot;Order Confirmation Email (Publisher)&quot;</p>
  <p>means the email to the publisher, automatically generated by the JISC Online
   Ordering Service after the Sub-Licensee has completed the Subscription Order
   and Acceptance Form, confirming that the Sub-Licensee has placed the order,
   the start and end date of the subscription period and that the Sub-Licensee
   has agreed to the terms and conditions of the Licence.</p>
  <p>&quot;Secure Authentication&quot;</p>
  <p>means access to the Licensed Work by UK Access Management Federation compliant
   technology, Internet Protocol (&ldquo;IP&rdquo;) ranges or by another means
   of authentication agreed between the Publisher and JISC Collections.</p>
  <p>&quot;Subscription Order and Acceptance Form&quot;</p>
  <p>means the form used by JISC Collections as part of the JISC Collections Online
   Ordering Service. A sample copy of the form is attached hereto in Annex 1. Once
   the completed form has been received by the JISC Collections Online Ordering
   Service, the system automatically generates an Order Confirmation Email (Institution)
   to the Sub-Licensee, Order Confirmation Email (JISC Collection) to JISC Collections
   and an Order Confirmation Email (Publisher) to the Publisher repeating the information
   on the form regarding the name of the Sub-Licensee, the resource, the start
   and end date of the subscription period and confirming the date on which the
   Sub-Licensee accepted the terms and conditions of the Sub-Licence.</p>
  <p>1.2 Headings contained in this Sub-Licence are for reference purposes only and
   shall not be deemed to be an indication of the meaning of the clause to which
   they relate.</p>
  <p>1.3 Where the context so implies, words importing the singular number shall include
   the plural and vice versa and words importing the masculine shall include the
   feminine and vice versa.</p>
  <h3>2. GRANT OF SUB-LICENCE</h3>
  <p>2.1 The Sub-Licensee agrees to pay the Fee set out in Schedule 1, in consideration
   of which JISC Collections agrees to grant to the Sub-Licensee a non-exclusive
   sub-licence to access and use the Licensed Work and to allow Authorised Users
   to access and use the Licensed Work throughout the term of this Sub-Licence
   by Secure Authentication for Educational Purposes only.</p>
  <h3>3. USE OF THE LICENSED WORK</h3>
  <p>3.1 Throughout the term of this Sub-Licence the Sub-Licensee may for Educational
   Purposes only:</p>
  <p>3.1.1 make such temporary local electronic copies of parts of the Licensed Work
   as are necessary to ensure efficient use by Authorised Users, provided that
   such use is subject to all the terms and conditions of this Sub-Licence;</p>
  <p>3.1.2 allow Authorised Users to access the Licensed Work by Secure Authentication
   in order to search, retrieve, display and view, and otherwise use parts thereof;</p>
  <p>3.1.3 allow Authorised Users to electronically save parts of the Licensed Work;</p>
  <p>3.1.4 allow Authorised Users to print out copies of parts of the Licensed Work;</p>
  <p>3.1.5 provide single printed or electronic copies of parts of the Licensed Work
   at the request of individual Authorised Users</p>
  <p>3.1.6 supply to an authorised user of another library (whether by post, fax or
   secure electronic transmission, using Ariel software or its equivalent, whereby
   the electronic file is deleted immediately after printing) a single paper copy
   of an electronic original of parts of the Licensed Work;</p>
  <p>3.1.7 incorporate parts of the Licensed Work for use by Authorised Users in printed
   and electronic course packs and study packs, resource listsand in any other
   material (including but not limited to multi-media works) to be used in thecourse
   of instruction and/or in virtual and managed environments (including but not
   limited tovirtual learning environments, managed learning environments, and
   library environments) hosted on a Secure Network. Each item shall carry appropriate
   acknowledgement of the source, listing title and the following copyright notice
   &ldquo;&copy; Crown Copyright and Landmark Information Group Limited (insert
   current calendar year). All rights reserved. (insert year of map(s)&rdquo;.
   Course packs in non-electronic non-print perceptible form, such as Braille,
   may also be offered to Authorised Users;</p>
  <p>3.1.8 allow Authorised Users to incorporate parts of the Licensed Work in printed
   or electronic form in assignments and portfolios, theses and in dissertations(&ldquo;the
   Academic Works&rdquo;), including reproductions of the Academic Works for personal
   use and library deposit, if such use conforms to the customary and usual practice
   of the Sub-Licensee.Reproductions in printed or electronic form of Academic
   Works may be provided to sponsors of such Academic Works. Each item shall carry
   appropriate acknowledgement of the source, listing title and the following copyright
   notice &ldquo;&copy; Crown Copyright and Landmark Information Group Limited
   (insert current calendar year). All rights reserved. (insert year of map(s)&rdquo;.</p>
  <p>3.1.9 incorporate parts of the Licensed Work in printed and electronic conference
   papers, articles, articles published in a journal publication and poster sessions;</p>
  <p>3.1.10 provide single printed or electronic copies (excluding Walk-In Users)
   of parts of the Licensed Work at the request of individual Authorised Users;</p>
  <p>3.1.10 display, download and print parts of the Licensed Work for the purpose
   of promotion of the Licensed Work, testing of the Licensed Work, or for training
   Authorised Users;</p>
  <p>3.1.11 publicly display or publicly perform the Licensed Work as part of a presentation
   at a seminar, conference, or workshop, or other such similar activity;</p>
  <p>3.1.12 use parts of the Licensed Work in brochures, leaflets and flyers for use
   by the Authorised Institution;</p>
  <p>3.1.13 publish parts of the Licensed Work on the website of the Authorised Institution
   or websites created by Authorised Users as part of a course, project or educational
   or academic research. The maximum mapped area per image published on websites
   is restricted to 200cm2 at source scale. Each item shall carry appropriate acknowledgement
   of the source, listing title and the following copyright notice &ldquo;&copy;
   Crown Copyright and Landmark Information Group Limited (insert current calendar
   year). All rights reserved. (insert year of map(s))&rdquo;;</p>
  <p>3.1.14 make such copies of training material and network such training material
   as may be required for the purpose of using the Licensed Work in accordance
   with this Sub-Licence.</p>
  <p>3.2 This Sub-Licence shall be deemed to complement and extend the rights of the
   Institution and Authorised Users under the Copyright, Designs and Patents Act
   1988 and the Copyright (Visually Impaired Persons) Act 2002 and nothing in this
   Sub-Licence shall constitute a waiver of any statutory right available and held
   by the Sub-Licensee and Authorised Users from time to time under these Acts
   or any amending legislation.</p>
  <h3>4. RESTRICTIONS</h3>
  <p>4.1 Save as provided herein, the Sub-Licensee and Authorised Users may not:</p>
  <p>4.1.1 sell, resell, redistribute, publish or otherwise make the information contained
   in the Licensed Work available in any manner or on any media to anyone other
   than Authorised Users unless the Sub-Licensee has been granted prior written
   consent by Landmark Information Group Limited;</p>
  <p>4.1.2 remove, obscure or modify copyright notices, text acknowledgments or other
   means of identification or disclaimers as they appear;</p>
  <p>4.1.3 permit anyone other than Authorised Users to access or use the Licensed
   Work;
  </p>
  <p>4.1.4 display or distribute any part of the Licensed Work on any electronic network,
   including without limitation the Internet and the World Wide Web, and any other
   distribution medium now in existence or hereinafter created, other than by Secure
   Authentication;
  </p>
  <p>4.1.5 use all or any part of the Licensed Work for any Commercial Use or for
   any purpose other than Educational Purposes;</p>
  <p>4.1.6 permit the Licensed Work to be electronically transmitted to any other
   recipient except where the recipient is an Authorised User under the terms of
   a valid Landmark Historic Map Data Sub-Licence Agreement.</p>
  <p>4.2 This Clause shall survive termination of this Sub-Licence for any reason.</p>
  <h3>5. RESPONSIBILITIES OF THE SUB-LICENSEE</h3>
  <p>5.1 The Sub-Licensee will:</p>
  <p>5.1.1 issue passwords or other access information only to Authorised Users and
   use all reasonable efforts to ensure that Authorised Users do not divulge their
   passwords or other access information to any third party;</p>
  <p>5.1.2 use all reasonable efforts, including without limitation by use of Secure
   Authentication, to ensure that only Authorised Users are permitted access to
   the Licensed Work;</p>
  <p>5.1.3 use all reasonable efforts to ensure that all Authorised Users are made
   aware of and undertake to abide by the terms of this Sub-Licence;</p>
  <p>5.1.4 use all reasonable efforts to monitor compliance with the terms of this
   Sub-Licence and notify Landmark Information Group Limited and JISC Collections
   immediately and provide full particulars on becoming aware of any of the following
   (a) any unauthorised access to or use of the Licensed Work or unauthorised use
   of any of the Sub-Licensee&#39;s password(s); or (b) any breach by an Authorised
   User of the terms of this Sub-Licence. Upon becoming aware of any breach of
   the terms of this Sub-Licence the Sub-Licensee further agrees promptly to fully
   investigate and initiate disciplinary procedures in accordance with the Sub-Licensee&#39;s
   standard practice and use all reasonable effort to ensure that such activity
   ceases and to prevent any recurrence;</p>
  <p>5.1.5 comply with all computer security procedures required by JISC Collections
   and/or a third party duly appointed by JISC Collections and take all reasonable
   steps to ensure the security of the Licensed Work; and</p>
  <p>5.1.6 provide lists of valid IP addresses to JISC Collections and update those
   lists on a regular basis the frequency of which will be agreed by the parties
   from time to time.</p>
  <h3>6. RESPONSIBILITIES OF JISC Collections</h3>
  <p>6.1 JISC Collections shall use all reasonable efforts to ensure access and use
   of the Licensed Work in accordance with the provisions as laid down in this
   Sub-Licence.
  </p>
  <p>6.2 JISC Collections shall use all reasonable efforts to cause customer support
   services to be provided to the Sub-Licensee and to Authorised Users.</p>
  <h3>7. USAGE DATA</h3>
  <p>7.1 The parties shall co-operate in gathering any data on usage of the Licensed
   Work that is available to them during the term of this Sub-Licence, and shall
   provide such data to each other upon request. Notwithstanding the foregoing,
   the parties shall neither assemble nor provide data from which an individual
   user could be identified.</p>
  <h3>8. FEE</h3>
  <p>8.1 The Sub-Licensee shall pay the fee to JISC Collections for the Sub-Licence
   in the amount and upon terms set out in Schedule 1.</p>
  <h3>9. TERM AND TERMINATION</h3>
  <p>9.1 The term of this Sub-Licence will commence upon the date of signature and
   will remain in full force and effect until 31st July 2013, unless terminated
   earlier as provided for in this Clause 9.</p>
  <p>9.2 Either party may terminate this Sub-Licence at any time on the material breach
   or repeated other breaches by the other of any obligation on its part under
   this Sub-Licence by serving a written notice on the other identifying the nature
   of the breach. The termination will become effective thirty days after receipt
   of the written notice unless during the relevant period of thirty (30) days
   the defaulting party remedies the breach</p>
  <p>9.3 Notwithstanding anything to the contrary herein, this Sub-Licence will be
   treated as if terminated if the Landmark Historic Mapping Data Supply and Licence
   Agreement between the Landmark Information Group Limited and JISC Collections
   terminates until JISC Collections or Landmark Information Group Limited remedies
   the breach. JISC Collections will notify the Sub-Licensee of such termination
   and when it has remedied the breach. JISC Collections shall make reasonable
   endeavours not to cause the Landmark Historic Map Data Supply and Licence Agreement
   between Landmark Information Group Limited and JISC Collections to terminate.</p>
  <p>9.4 Further, notwithstanding anything to the contrary herein, upon a breach by
   the Sub-Licensee, on-line access to the Licensed Work shall be terminated.</p>
  <p>9.5 Upon termination or expiry of this Sub-Licence, print copies of parts of
   the Licensed Work made by the Sub-Licensee or Authorised Users may be retained
   and used subject to the terms of Clauses 3 and 4 of this Sub-Licence, which
   terms shall survive any termination of this Sub-Licence. The use of electronic
   copies after the expiry or termination of this Sub-Licence requires the authorisation
   from Landmark Information Group Limited (and no such use shall be made without
   such authorisation) and the conditions of use are not subject to this Sub-Licence.</p>
  <h3>10. ACKNOWLEDGEMENT AND PROTECTION OF INTELLECTUAL PROPERTY RIGHTS</h3>
  <p>10.1 The Sub-Licensee acknowledges that all Intellectual Property Rights in the
   Licensed Work are the sole and exclusive property of Landmark Information Group
   Limited or are duly licensed to Landmark Information Group Limited and that
   this Sub-Licence does not assign or transfer to the Sub-Licensee any right,
   title or interest therein except for the right to use the Licensed Work in accordance
   with the terms and conditions of this Sub-Licence.</p>
  <h3>11. REPRESENTATIONS, WARRANTIES AND INDEMNIFICATION</h3>
  <p>11.1 The Sub-Licensee represents and warrants that it has sufficient authority
   and rights to enter into and perform its obligations under this Sub-Licence.</p>
  <p>11.2 JISC Collections represents and warrants that it has the right to grant
   the Sub-Licence and that the use of the Licensed Work by the Sub-Licensee and
   Authorised Users in accordance with the terms of this Sub-Licence shall not
   infringe the copyright of any third party. The foregoing shall not apply to
   improper usage of the Licensed Work by the Sub-Licensee or Authorised Users.
   JISC Collections makes no representation or warranty, and expressly disclaims
   any liability with respect to the content of the Licensed Work, including but
   not limited to errors or omissions contained therein, libel, infringement of
   rights of publicity, privacy, trademark rights, moral rights, or the disclosure
   of confidential information.</p>
  <p>11.3 The Sub-Licensee agrees to notify Landmark Information Group Limited and
   JISC Collections within 48 hours and provide full particulars in the event that
   it becomes aware of any actual or threatened claims by any third party in connection
   with any works contained in the Licensed Work. It is expressly agreed that upon
   such notification, or if Landmark Information Group Limited becomes aware of
   such a claim from other sources, Landmark Information Group Limited may remove
   such work(s) from the Licensed Work. At the request of Landmark Information
   Group Limited, the Sub-Licensee will make all reasonable efforts to remove such
   work(s) from any copies of the Licensed Work maintained by the Sub-Licensee.
   Failure to report knowledge of any actual or threatened claim by any third party
   shall be deemed a material breach of this Sub-Licence.</p>
  <p>11.4 Nothing in this Sub-Licence shall make the Sub-Licensee liable for breach
   of the terms of this Sub-Licence by any Authorised User provided that the Sub-Licensee
   did not cause, knowingly assist or condone the continuation of such breach after
   becoming aware of a an actual breach having occurred.</p>
  <p>11.5 Subject to the above and to the extent permitted by law, JISC Collections
   shall not be liable to the Sub-Licensee for any loss or damage including any
   loss of profits, goodwill, contract or any indirect or consequential loss including
   loss or damage suffered by the Sub-Licensee as a result of an action brought
   by a third party.</p>
  <p>11.6 Landmark Information Group Limited reserves the right to change the content,
   presentation, user facilities or availability of parts of the Licensed Work
   and to make changes in any software used to deliver the Licensed Work at their
   sole discretion. JISC Collections will notify the Sub-Licensee of any substantial
   change to the Licensed Work.</p>
  <p>11.7 Other than the express warranties stated in this Clause 11, the Licensed
   Work is provided on an &ldquo;as is&rdquo; basis, and JISC Collections disclaims
   any and all other warranties, conditions, or representations (express, implied,
   oral or written), relating to the Licensed Work or any part thereof, including,
   without limitation, any and all implied warranties of quality, performance,
   merchantability or fitness for a particular purpose. JISC Collections further
   expressly disclaims any warranty or representation to Authorised Users, or to
   any third party. JISC Collections accepts no liability for loss suffered or
   incurred by the Sub-Licensee or Authorised Users as a result of their reliance
   on the Licensed Work.</p>
  <p>11.8 The Sub-Licensee represents to JISC Collections that its computer system
   through which the Licensed Work will be used is configured, and procedures are
   in place, to prohibit access to the Licensed Work by any person other than an
   Authorised User; that it shall inform Authorised Users about the conditions
   of use of the Licensed Work; and that during the term of this Sub-Licence, the
   Sub-Licensee will continue to make all reasonable efforts to bar non-permitted
   access and to convey appropriate use information to its Authorised Users.</p>
  <p>11.9 JISC Collections and the Sub-Licensee do not seek to exclude liability under
   this Agreement for fraud or for personal injury or death caused by its negligence
   and the negligence of its employees, authorised sub-contractors and agents.</p>
  <h3>12. FORCE MAJEURE</h3>
  <p>12.1 Either party&rsquo;s failure to perform any term or condition of this Sub-Licence
   as a result of circumstances beyond the control of the relevant party (including
   without limitation, war, strikes, flood, governmental restrictions, and power,
   telecommunications or Internet failures or damages to or destruction of any
   network facilities) [&quot;Force Majeure&quot;] shall not be deemed to be, or
   to give rise to, a breach of this Sub-Licence.</p>
  <p>12.2 If either party to this Sub-Licence is prevented or delayed in the performance
   of any of its obligations under this Sub-Licence by Force Majeure and if such
   party gives written notice thereof to the other party specifying the matters
   constituting Force Majeure together with such evidence as it reasonably can
   give and specifying the period for which it is estimated that such prevention
   or delay will continue, then the party in question shall be excused the performance
   or the punctual performance as the case may be as from the date of such notice
   for so long as such cause of prevention or delay shall continue.</p>
  <h3>13. ASSIGNMENT</h3>
  <p>13.1 Neither this Sub-Licence nor any of the rights and obligations under it
   may be assigned or sub-licensed by the Sub-Licensee without obtaining the prior
   written consent of JISC Collections or HEFCE, after an assignment by JISC Collections
   to HEFCE, such consent not to be unreasonably withheld or delayed. In any permitted
   assignment, the assignor shall procure and ensure that the assignee shall assume
   all rights and obligations of the assignor under this Sub-Licence and agrees
   to be bound to all the terms of this Sub-Licence.</p>
  <h3>14. GOVERNING LAW AND DISPUTE RESOLUTION</h3>
  <p>14.1 This Sub-Licence shall be governed by and construed in accordance with English
   law and the parties irrevocably agree that any dispute arising out of or in
   connection with this Sub-Licence will be subject to and within the jurisdiction
   of the English courts.</p>
  <p>14.2 Where the parties agree that a dispute arising out of or in connection with
   this Sub-Licence would best be resolved by the decision of an expert, they will
   agree upon the nature of the expert required and together appoint a suitable
   expert by agreement. In default of agreement upon whom to appoint as a suitable
   expert, such expert shall upon the request of either party be appointed by the
   Chair for the time being of the Committee of Vice-Chancellors and Principals.</p>
  <p>14.3 Any person to whom a reference is made under Clause 14.2 shall act as expert
   and not as an arbitrator and his decision (which shall be given by him in writing
   and shall state the reasons for his decision) shall be final and binding on
   the parties except in the case of manifest error or fraud.</p>
  <p>14.4 Each party shall provide the expert with such information and documentation
   as he may reasonably require for the purposes of his decision.</p>
  <p>14.5 The costs of the expert shall be borne by the parties in such proportions
   as the expert may determine to be fair and reasonable in all circumstances or,
   if no determination is made by the expert, by the parties in equal proportions.</p>
  <h3>15. NOTICES</h3>
  <p>15.1 All notices required to be given under this Sub-Licence shall be given in
   writing in English and sent by electronic mail, fax or first class registered
   or recorded delivery to the relevant addressee at its address set out below,
   or to such other address as may be notified by either party to the other from
   time to time under this Sub-Licence, and all such notices shall be deemed to
   have been received (a) 24 hours after successful transmission in the case of
   electronic mail or fax; (b) fourteen (14) days after the date of posting in
   the case of first class registered or recorded delivery:</p>
  <p>
   <strong>if to JISC Collections:</strong>
  </p>
  <p>Lorraine Estelle
   <br />Chief Executive Officer
   <br />JISC Collections
   <br />Brettenham House South
   <br />5 Lancaster Place
   <br />London WC2E 7EN
   <br /><a href="mailto:l.estelle@jisc.ac.uk">l.estelle@jisc.ac.uk</a>
   <br />
  </p>
  <p>
   <strong>If to Landmark Information Group Limited:</strong>
  </p>
  <p>Copyright Licensing
   <br />Landmark Information Group Limited
   <br />7 Abbey Court
   <br />Eagle Way
   <br />Sowton
   <br />Exeter
   <br />EX2 7HY</p>
  <p>
   <strong>if to the Sub-Licensee:</strong>
  </p>
  <p>[As stated in the Acceptance of Sub-Licence Form]</p>
  <h3>16. GENERAL</h3>
  <p>16.1 This Sub-Licence and its Schedules constitute the entire agreement between
   the parties relating to the Licensed Work and supersede all prior communications,
   understandings and agreements (whether written or oral) relating to its subject
   matter and may not be amended or modified except by agreement of both parties
   in writing.</p>
  <p>16.2 The Schedules shall have the same force and effect as if expressly set in
   the body of this Sub-Licence and any reference to this Sub-Licence shall include
   the Schedules.</p>
  <p>16.3 The Landmark Information Group Limited may enforce the terms of this Agreement
   subject to and in accordance with the terms of this Sub-Licence and the provisions
   of the Contract (Rights of Third Parties) Act 1999, as amended or substituted
   from time to time.</p>
  <p>16.4 The invalidity or unenforceability of any provision of this Sub-Licence
   shall not affect the continuation in force of the remainder of this Sub-Licence.</p>
  <p>16.5 The rights of the parties arising under this Sub-Licence shall not be waived
   except in writing. Any waiver of any of a party&#39;s rights under this Sub-Licence
   or of any breach of this Sub-Licence by the other party shall not be construed
   as a waiver of any other rights or of any other or further breach. Failure by
   either party to exercise or enforce any rights conferred upon it by this Sub-Licence
   shall not be deemed to be a waiver of any such rights or operate so as to bar
   the exercise or enforcement thereof at any subsequent time or times.</p>
  <h3>SCHEDULE 1: FEE AND PAYMENT TERMS</h3>
  <p>1. By completing the Subscription Order and Acceptance Form as part of the JISC
   Collections Online Ordering Service, the Sub-Licensee accepts the terms of this
   Sub-Licence and accepts that it must pay to JISC Collections the total sum of
   the charges for the whole term of this Sub-Licence in accordance with the applicable
   JISC Collections charging band. JISC Collections will invoice the Sub-Licensee
   annually for the applicable charge as set out below. All prices are exclusive
   of VAT, which will be payable where applicable.</p>
  <p>2. For the avoidance of doubt 1.the term of this Sub-Licence will commence upon
   the date as set out in the Subscription Order and Acceptance Form and will remain
   in full force and effect until the date of termination as set out in Clause
   9.
  </p>
  <p>3. In the event that the Sub-Licensee completes the Subscription Order Confirmation
   and Acceptance Form during a given year, the Sub-Licensee shall pay JISC Collections
   Online Ordering Service that part of the applicable charge which represents
   the period covering the date as set out in the Subscription Order and Acceptance
   Form up to the date where the next 12 months subscription period starts. Thereafter
   the Sub-Licensee will pay to JISC Collections the full applicable charges for
   subsequent years as and where applicable.</p>
  <p>4.</p>
  <table border="1px solid black">
   <tr>
    <td></td>
    <td>Period</td>
   </tr>
   <tr>
    <th>JISC Band</th>
    <th>01/08/2012 - 31/07/2013</th>
   </tr>
   <tr>
    <td>A</td>
    <td>&pound;1,277</td>
   </tr>
   <tr>
    <td>B</td>
    <td>&pound;1,277</td>
   </tr>
   <tr>
    <td>C</td>
    <td>&pound;1,148</td>
   </tr>
   <tr>
    <td>D</td>
    <td>&pound;1,148</td>
   </tr>
   <tr>
    <td>E</td>
    <td>&pound;957</td>
   </tr>
   <tr>
    <td>F</td>
    <td>&pound;957</td>
   </tr>
   <tr>
    <td>G</td>
    <td>&pound;574</td>
   </tr>
   <tr>
    <td>H</td>
    <td>&pound;574</td>
   </tr>
   <tr>
    <td>I</td>
    <td>&pound;574</td>
   </tr>
   <tr>
    <td>J</td>
    <td>&pound;574</td>
   </tr>
  </table>
  <p>&nbsp;</p>
  <p>
   <strong>FE and Sixth Form colleges Pricing</strong>
  </p>
  <table border="1px solid black">
   <tr>
    <td></td>
    <td>Period</td>
   </tr>
   <tr>
    <th>JISC Band</th>
    <th>01/08/2012 - 31/07/2013</th>
   </tr>
   <td>C</td>
   <td>&pound;250</td>
   </tr>
   <tr>
    <td>D</td>
    <td>&pound;250</td>
   </tr>
   <tr>
    <td>E</td>
    <td>&pound;250</td>
   </tr>
   <tr>
    <td>F</td>
    <td>&pound;250</td>
   </tr>
   <tr>
    <td>G</td>
    <td>&pound;225</td>
   </tr>
   <tr>
    <td>H</td>
    <td>&pound;225</td>
   </tr>
   <tr>
    <td>I</td>
    <td>&pound;200</td>
   </tr>
   <tr>
    <td>I</td>
    <td>&pound;200</td>
   </tr>
  </table>
  <p>&nbsp;</p>
  <p>5. Invoices shall be due and payable no later than thirty (30) days after being
   issued by JISC Collections.</p>
  <h3>SCHEDULE 2: LICENSED WORK</h3>
  <p>The Licensed Work consists of the following products:</p>
  <p>1. All available County Series Map Data at 1:2500 and 1:10560 scale published
   in epochs 1, 2, 3 and 4.</p>
  <p>2. All available National Grid Map Data at 1:1250 and, 1:2500 and 1:10560/10000
   scale of the UK before the introduction of Digital Land-Line published in epochs
   A5, B6, C7, D8 and E9.</p>
  <p>3. All available Town Plans at 1:500, 1:528 and 1:1,056 scales published from
   1848 and 1939;</p>
  <p>The nine epochs are:</p>
  <ul>
   <li>Epoch 1: the first County Series survey; published 1843 to 1893</li>
   <li>Epoch 2: the first County Series revision; published 1891 to 1912</li>
   <li>Epoch 3: the second County Series survey; published 1904 to 1939</li>
   <li>Epoch 4: the third County Series survey; published 1919 to 1939</li>
   <li>Epoch A5: the first survey/overhaul to the National Grid; published dates from
    1945
   </li>
   <li>Epoch B6: the first National Grid revision</li>
   <li>Epoch C7: the second National Grid revision</li>
   <li>Epoch D8: the third National Grid revision</li>
   <li>Epoch E9: the fourth National Grid revision</li>
  </ul>
  <p>The County Series Map Data set is represented by epochs 1, 2, 3 and 4 and the
   National Grid Map Data is represented by epochs 5 to 9.</p>
  <p>3. For the avoidance of doubt, the National Grid data supplied as part of the
   Licensed Work only includes the first available map for each published edition/revision
   as held by Ordnance Survey at the time of scanning. The Licensed Work does not
   include infill editions/revisions of Survey Information on Microfilm (SIM) maps
   nor Supplementary Unpublished Survey Information (SUSI) maps. In addition, after
   1995 the SIM cards were replaced by Superplan maps, with the word &quot;Superplan&quot;
   printed on them. Superplan maps are also not included in the Licensed Work.&quot;</p>
 </div>
  `,
  help: {
    left: {
      text: "Help",
      link: "/webhelp/historic/historicdigimaphelp.htm"
    },
    right: {
      text: "FAQ",
      link: "/webhelp/historic/historicdigimaphelp.htm#faqs_and_known_issues/faqs.htm"
    }
  },
  apps: [{
    id: "HISTORICMAPPER",
    name: "Ancient Roam",
    link: "/roam/historic",
    description: "View, annotate and print Historic OS maps",
    infoContent: `
      <p class="help-text">
        Ancient Roam allows you to view historical Ordnance Survey maps from the 1840s to the 1990s. Zoom through 12 different levels from maps at 1:500 to 1:10 560 in scale. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, points, lines and areas)</li>
        <li>identify publishing date by clicking on the map</li>
        <li>compare two maps of different dates side by side</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `
  }, {
    id: "HISTORICDOWNLOAD",
    name: "Historic Data Download",
    link: "/datadownload/historicdownload",
    description: "Download Historic OS maps for use in GIS/CAD",
    infoContent: `
      <p class="help-text">
        Ancient Roam allows you to view historical Ordnance Survey maps from the 1840s to the 1990s. Zoom through 12 different levels from maps at 1:500 to 1:10 560 in scale. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, points, lines and areas)</li>
        <li>identify publishing date by clicking on the map</li>
        <li>compare two maps of different dates side by side</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `,
    ipAccessRestricted: true
  }]
}, {
  id: "geology",
  name: "Geology",
  icon: `
    <svg x="0px" y="0px" width="68.029px" height="68.029px" viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029">
      <g>
        <g>
          <path d="M30.815,17.591c0,0,11.232-11.873,31.766-13.524c0,0-17.323-6.039-35.294,8.616l-1.382-1.465l-5.719,4.023L19.798,17.3
            L4.311,25.906l7.523,8.909l13.19-12.446l32.843,42.827l3.155-2.424l3.039-2.315L30.815,17.591z"/>
        </g>
      </g>
    </svg>
  `,
  description: "Geology Digimap offers a range of onshore and offshore BGS mapping data products.",
  subscriptionRequired: true,
  licenceUrl: "/webhelp/geology/copyright_and_terms/licence_agreement.htm",
  licence: `
 <div class="licence-text">
  <h2>British Geological Survey Data Sub-Licence Agreement</h2>
  <p>THE JISC CONTENT PROCUREMENT COMPANY LIMITED (TRADING AS JISC COLLECTIONS), a
   company incorporated in England and Wales and limited by guarantee whose registered
   office is at Ground Floor, Brettenham House South, Lancaster Place, London WC2E
   7EN (&quot;JISC Collections&quot;) OFFERS to you, &quot;the Authorised Institution&quot;
   the permission to access and use the Licensed Work and Digital Maps on the terms
   and conditions as set out in this Sub-Licence. Upon completion of the Order
   Confirmation and Acceptance Form, as part of the JISC Collections online ordering
   service your institution will become a non-exclusive Authorised Institution
   of JISC Collections.</p>
  <p>Acceptance shall be by receipt of the Order Confirmation and Acceptance Form
   as part of the JISC Collections online ordering service by JISC Collections
   or a JISC Collections&rsquo; authorised agent who will accept delivery on behalf
   of JISC Collections. Acceptance shall be acceptance of all terms of this Sub-Licence
   and no variation or counter offer will be accepted by JISC Collections. In the
   event that no or partial compliance is made as to the manner or form described
   for acceptance, no sub-licence will be granted and this offer is deemed withdrawn.</p>
  <h3>RECITALS</h3>
  <p>WHEREAS the British Geological Survey Digital Data (as hereinafter defined) consists
   of 1:250,000 scale themes (GB coverage - vector data), 1:50,000 scale themes
   (GB coverage - vector data), DigRock, DigSBS, the British Geological Survey
   images (of geological features, of rocks, fossils and the BGS at work), and
   the British Geological Survey lexicon of named rock units;</p>
  <p>AND WHEREAS the Licensed Works (as hereinafter defined) and all Intellectual
   Property Rights (as hereafter defined) therein are owned by or licensed to the
   Natural Environment Research Council (represented by its component body British
   Geological Survey) (&quot;British Geological Survey&quot;);</p>
  <p>AND WHEREAS by an agreement between British Geological Survey and JISC Collections
   (the &quot;British Geological Survey Data Supply and Licence Agreement&quot;),
   JISC Collections is permitted to sub-license the access and use of the Licensed
   Works to the Authorised Institutions in accordance with the terms of this Sub-Licence;</p>
  <p>JISC COLLECTIONS AND THE AUTHORISED INSTITUTION AGREE AS FOLLOWS:</p>
  <h3>1. DEFINITIONS</h3>
  <p>1.1 In this Sub-Licence, the following expressions shall have the following meanings:</p>
  <p>Authorised Institution means the Authorised Institution whose details are set
   out in the Acceptance of Sub-Licence Form attached hereto and made a part hereof.</p>
  <p>Authorised Users means individuals who are authorised by the Authorised Institution
   to access the Authorised Institution&rsquo;s information services whether on-site
   or off-site via Secure Authentication and who are affiliated to the Authorised
   Institution as a current student (including but not limited to undergraduates
   and postgraduates), member of staff (whether on a permanent or temporary basis
   including retired members of staff and any teacher who teaches Authorised Users
   in the United Kingdom) or contractor of the Authorised Institution. Persons
   who are not a current student, member of staff or a contractor of the Authorised
   Institution, but who are permitted to access the Authorised Institution&rsquo;s
   information services from computer terminals or otherwise within the physical
   premises of the Authorised Institution [&quot;Walk-In Users&quot;] are also
   deemed to be Authorised Users, only for the time they are within the physical
   premises of the Authorised Institution. Walk-In Users may not be given means
   to access the Licensed Work when they are not within the physical premises of
   the Authorised Institution. For the avoidance of doubt, Walk-In Users may not
   be given access to the Licensed Work by any wireless network provided by the
   Authorised Institution unless such network is a Secure Network.</p>
  <p>Charges means any or all the charges as set out in Schedule 1.</p>
  <p>Commercial Use means use of the Licensed Work or Digital Maps other than for
   Educational Purposes (as hereinafter defined). For the avoidance of doubt, neither
   the recovery of direct cost by the Sub-Licensee from Authorised Users, nor use
   by the Sub-Licensee or Authorised Users of the Licensed Work in the course of
   research funded by a commercial organisation is deemed to constitute Commercial
   Use.
  </p>
  <p>Datacentre means a datacentre appointed from time to time by HEFCE.</p>
  <p>Digital Data means that part of the Licensed Work that will be made available
   via Secure Authentication as digital data and not as Digital Maps.</p>
  <p>Digital Maps means any or all of the maps created by a Datacentre from the Licensed
   Work to be used in a Service provided by a Datacentre.</p>
  <p>Educational Purposes means for the purpose of education, teaching, distance learning,
   private or non-commercial study and/or private or non-commercial research.</p>
  <p>Institution means a higher or further education institution in the UK whose name
   appears on the most up to date list of higher and further education institutions
   found on line at <a href="http://www.jisc.ac.uj/coll_allbanding">http://www.jisc.ac.uj/coll_allbanding</a>
  </p>
  <p>Intellectual Property Rights means patents, trademarks, trade names, design rights,
   copyright (including rights in computer software and moral rights), database
   rights, rights in know-how and other intellectual property rights, in each case
   whether registered or unregistered and including applications for the grant
   of any of the foregoing and all rights or forms of protection having equivalent
   or similar effect to any of the foregoing which may subsist anywhere in the
   world.
  </p>
  <p>JORUM Repository means the central repository of learning and teaching material
   funded by the UK funding bodies.</p>
  <p>Licensed Work means the British Geological Survey Digital Data and Digital Maps.</p>
  <p>Service means a service provided by HEFCE, JISC Collections or any Datacentre
   acting on its behalf such as (but not limited to) Digimap, relating to the collection
   of British Geological Survey&rsquo;s digital data known to the parties as British
   Geological Survey Data comprising the datasets as listed in Appendix 2 and such
   other British Geological Survey data products as HEFCE and British Geological
   Survey may agree from time to time.</p>
  <p>Secure Authentication means access by Athens authentication, Internet Protocol
   (IP) ranges or by a username and password or by another means of authentication
   agreed between British Geological Survey and HEFCE from time to time.</p>
  <p>Secure Network means a network which is only accessible by Secure Authentication.</p>
  <p>Use means viewing, copying, adaptation, reproduction, manipulation or modification
   of the Digital Data to create customised maps and models and any further use
   of such customised maps and models by Authorised Users in accordance with Clauses
   3 and 4 of this Sub-Licence Agreement.</p>
  <p>1.2 Headings contained in this Sub-Licence are for reference purposes only and
   shall not be deemed to be an indication of the meaning of the clause to which
   they relate.</p>
  <p>1.3 Where the context so implies, words importing the singular number shall include
   the plural and vice versa and words importing the masculine shall include the
   feminine and vice versa.</p>
  <h3>2. GRANT OF SUB-LICENCE</h3>
  <p>2.1 The Authorised Institution agrees to pay the Charges as set out in Schedule
   1, in consideration of which JISC Collections agrees to grant to the Authorised
   Institution a non-exclusive sub-licence to access and use the Licensed Work
   and to allow Authorised Users to access and use the Licensed Work throughout
   the term of this Sub-Licence by Secure Authentication for Educational Purposes
   only.
  </p>
  <p>3.USE OF THE LICENSED WORK</p>
  <p>3.1 Subject to the provisions of Appendices 3 and 4, throughout the term of this
   Sub-Licence the Authorised Institution may for Educational Purposes only:</p>
  <p>3.1.1 make such temporary local electronic copies of all or part of the Licensed
   Work and Digital Maps as are necessary to ensure efficient use by Authorised
   Users, provided that such use is subject to all the terms and conditions of
   this Sub-Licence;</p>
  <p>3.1.2 allow Authorised Users to access the Licensed Work and Digital Maps by
   Secure Authentication in order to search, retrieve, view, display and otherwise
   use parts thereof including but not limited to Use the Digital Data in accordance
   with the terms of this Sub-Licence;</p>
  <p>3.1.3 allow Authorised Users to electronically save parts of the Licensed Work
   and Digital Maps;</p>
  <p>3.1.4 allow Authorised Users to print out copies of parts of the Licensed Work
   and Digital Maps;</p>
  <p>3.1.5 allow Authorised Users to incorporate parts of the Licensed Work and Digital
   Maps in printed and non-manipulable (e.g. locked .PDF file) electronic course
   packs, study packs and course notes hosted on a Secure Network, virtual learning
   environments, managed learning environments and multi-media works. Each item
   shall carry the following copyright notice Geological Map Data BGS &copy; NERC
   20(yy) Course packs in non-electronic non-print perceptible form, such as Braille,
   may also be offered to Authorised Users;</p>
  <p>3.1.6 (a) allow Authorised Users to incorporate parts of the Licensed Work and
   Digital Maps in printed or non-manipulable (e.g. locked .PDF file) electronic
   form in assignments and portfolios, theses and in dissertations (the Academic
   Works), including reproductions of the Academic Works for personal use and library
   deposit, if such use conforms to the customary and usual practice of the Authorised
   Institution. Reproductions in printed or electronic form of Academic Works containing
   Digital Maps may only be provided to sponsors of such Academic Works. Reproductions
   in electronic form of Academic Works containing Digital Data may only be provided
   to sponsors of such Academic Works where such sponsor holds a licence from the
   Licensor to use Digital Data. Reproductions in printed form of Academic Works
   containing Digital Data may be provided to sponsors of such Academic Works.
   In each case, each item shall carry the following copyright notice Geological
   Map Data BGS &copy; NERC 20(yy). (For the avoidance of doubt, sponsors of Academic
   Works may not use any Reproductions provided to them under the provisions of
   this Clause 3.1.6 for any Commercial Use); and</p>
  <p>(b) incorporate parts of the Digital Maps in printed and non-manipulable (e.g.
   locked .PDF file) electronic conference papers, articles, articles published
   in a journal publication and poster sessions;</p>
  <p>3.1.7 provide printed or electronic copies of the Licensed Work and Digital Maps
   at the request of individual Authorised Users;</p>
  <p>3.1.8 supply to an authorised user of another Institution library (whether by
   post, fax or secure electronic transmission, using Ariel or its equivalent,
   whereby the electronic file is deleted immediately after printing) a single
   paper copy of parts of the Licensed Work. Each copy shall carry the following
   copyright notice Geological Map Data &copy; NERC 20(yy);</p>
  <p>3.1.9 display, download and print parts of the Licensed Work and Digital Maps
   for the purpose of promotion of the Licensed Work, testing of the Licensed Work
   and Digital Maps, or for training Authorised Users;</p>
  <p>3.1.10 publicly display or publicly perform parts of the Licensed Work and Digital
   Maps as part of a presentation at a seminar, conference, or workshop, or other
   such similar activity;</p>
  <p>3.1.11 make such copies of training material and network on a Secure Network
   such training material as may be required for the purpose of using the Licensed
   Work and Digital Maps in accordance with this Sub-Licence; and</p>
  <p>3.1.12 use Digital Maps in brochures, leaflets and flyers for use by the Authorised
   Institution;
  </p>
  <p>3.1.13 publish Digital Maps on the website of the Authorised Institution or websites
   created by Authorised Users as part of a course or project;</p>
  <p>3.1.14 print and use copies of the Licensed Work and Digital Maps as part of
   a Post Graduate Certificate in Education course in schools.</p>
  <p>3.1.15 deposit in perpetuity the learning and teaching objects as referred to
   in Clause 3.1.11 in electronic repositories operated by the Authorised Institution
   on a Secure Network and in the JORUM Repository. The access and use of such
   learning and teaching objects shall be governed by the terms and conditions
   of the applicable repository.</p>
  <p>3.2 This Sub-Licence shall be deemed to complement and extend the rights of the
   Institution and Authorised Users under the Copyright, Designs and Patents Act
   1988 and the Copyright (Visually Impaired Persons) Act 2002 and nothing in this
   Sub-Licence shall constitute a waiver of any statutory rights held by the Institution
   and Authorised Users from time to time under these Acts or any amending legislation.</p>
  <h3>4. RESTRICTIONS</h3>
  <p>4.1 Save as provided herein, the Authorised Institution and Authorised Users
   may not:</p>
  <p>4.1.1 sell or resell the Licensed Work, Digital Data and/or Digital Maps unless
   the Authorised Institution or an Authorised User has been granted prior written
   consent by British Geological Survey to do so;</p>
  <p>4.1.2 redistribute, publish or otherwise make any information contained in any
   part of the Licensed Work, Digital Data and/or Digital Maps available in any
   manner or on any media other than that allowed under this Agreement;</p>
  <p>4.1.3 remove, obscure or modify copyright notices, text acknowledgments or other
   means of identification or disclaimers as they appear;</p>
  <p>4.1.4 save as provided for under this sub-licence, display or distribute any
   part of the Licensed Work, Digital Data and/or Digital Maps on any electronic
   network, including without limitation the Internet and the World Wide Web, and
   any other distribution medium now in existence or hereinafter created, other
   than on a Secure Network;</p>
  <p>4.1.5 save in relation to Clauses 3.1.6, 3.1.9, 3.1.14, and 3.1.15, permit or
   allow anyone other than Authorised Users to access or use the Licensed Work,
   Digital Data and/or Digital Maps;</p>
  <p>4.1.6 use all or any part of the Licensed Work and Digital Maps for any Commercial
   Use or for any purpose other than Educational Purposes, the restriction to include
   any use of the Licensed Work and the Digital Maps (or subsequently derived works)
   where it is possible to reverse engineer back to or recompile the original Licensed
   Work and the Digital Maps.</p>
  <p>4.1.7 save in relation to Clause 3.1.9 and 3.1.15, permit any part of the Licensed
   Work, Digital Data and/or Digital Maps to be electronically transmitted to any
   other recipient except where the recipient is an Authorised User under the terms
   of a valid British Geological Survey Data Sub-Licence Agreement.</p>
  <p>4.2 This Clause 4 shall survive termination of this Sub-Licence for any reason.</p>
  <h3>5. RESPONSIBILITIES OF THE AUTHORISED INSTITUTION</h3>
  <p>5.1 The Authorised Institution will:</p>
  <p>5.1.1 issue passwords or other access information only to Authorised Users and
   use all reasonable efforts to ensure that Authorised Users do not divulge their
   passwords or other access information to any third party;</p>
  <p>5.1.2 use all reasonable efforts, including without limitation by use of Secure
   Authentication, to ensure that only Authorised Users are permitted access to
   the Licensed Work and Digital Maps;</p>
  <p>5.1.3 use all reasonable efforts to ensure that all Authorised Users are made
   aware of and undertake to abide by the terms of this Sub-Licence;</p>
  <p>5.1.4use all reasonable efforts to monitor compliance with the terms of this
   Sub-Licence and notify British Geological Survey and JISC Collections (including
   any Datacentre acting on behalf of JISC Collections in the provision of the
   Service)immediately and provide full particulars on becoming aware of any of
   the following (a) any unauthorised access to or use of the Licensed Work or
   unauthorised use of any of the Authorised Institution&#39;s password(s); or
   (b) any breach by an Authorised User of the terms of this Sub-Licence. Upon
   becoming aware of any breach of the terms of this Sub-Licence the Authorised
   Institution further agrees promptly to fully investigate and initiate disciplinary
   procedures in accordance with the Authorised Institution&#39;s standard practice
   and use all reasonable effort to ensure that such activity ceases and to prevent
   any recurrence;</p>
  <p>5.1.5where IP addresses are used as the method of Secure Authentication, provide
   lists of valid IP addresses to JISC Collections and update those lists on a
   regular basis the frequency of which will be agreed by the parties from time
   to time.</p>
  <p>5.1.6 make available to British Geological Survey on request such information
   as British Geological Survey may reasonably require to use to better understand
   the type and nature of the specific Educational Purposes carried out by the
   Authorised Institution and the Authorised Users using the Licensed Work, Digital
   Data and/or Digital Maps. In particular but without prejudice to the generality
   of the foregoing, British Geological Survey may use examples of such use for
   the preparation of case studies for marketing and developing the Licensed Work,
   Digital Data and/or Digital Maps.</p>
  <h3>6. RESPONSIBILITIES OF JISC COLLECTIONS</h3>
  <p>6.1 JISC Collections shall use all reasonable efforts to ensure access and use
   of the Licensed Work in accordance with the provisions as laid down in this
   Sub-Licence.
  </p>
  <p>6.2 JISC Collections shall use all reasonable efforts to cause customer support
   services to be provided to the Authorised Institution and to Authorised Users.</p>
  <h3>7. USAGE DATA</h3>
  <p>7.1 The parties shall co-operate in gathering any data on usage of the Licensed
   Work that is available to them during the term of this Sub-Licence, and shall
   provide such data to each other upon request. Notwithstanding the foregoing,
   the parties shall neither assemble nor provide data from which an individual
   user could be identified.</p>
  <h3>8. CHARGES</h3>
  <p>8.1 The Authorised Institution will pay the Charges to JISC Collections for the
   Sub-Licence in the amount and upon terms as set out in Schedule 1.</p>
  <h3>9. TERM AND TERMINATION</h3>
  <p>9.1 The term of this Sub-Licence will commence upon the date of acceptance of
   this Licence via the Order Confirmation and Acceptance Form and will remain
   in full force and effect until 31st July 2016, unless terminated earlier as
   provided for in this Clause 9.</p>
  <p>9.2 The Institution may terminate this Agreement on 31st July 2011, 31st July
   2012, 31st July 2013, 31st July 2014, or 31st July 2015 by giving the Publisher
   sixty days notice to that effect.</p>
  <p>9.3 Either party may terminate this Sub-Licence at any time on the material breach
   or repeated other breaches by the other of any obligation on its part under
   this Sub-Licence by serving a written notice on the other identifying the nature
   of the breach. The termination will become effective thirty days after receipt
   of the written notice unless during the relevant period of thirty (30) days
   the defaulting party remedies the breach.</p>
  <p>9.4 Notwithstanding anything to the contrary herein, this Sub-Licence will be
   treated as if terminated if the British Geological Survey Data Supply and Licence
   Agreement between British Geological Survey and JISC Collections terminates
   for any reason. JISC Collections shall make reasonable endeavours not to cause
   the British Geological Survey Data Supply and Licence Agreement between British
   Geological Survey and JISC Collections to terminate.</p>
  <p>9.5 Further, notwithstanding anything to the contrary herein, upon a breach by
   the Authorised Institution, on-line access to the Licensed Work, Digital Data
   and/or Digital Maps shall be terminated.</p>
  <p>9.6 Upon termination of this Sub-Licence, copies of any part of the Licensed
   Work made by the Authorised Institution or Authorised Users may not be retained
   and used, other than as provided for under this clause. Print copies may be
   used after termination of this Agreement subject to the terms of Clauses 3 and
   4 of this Sub-Licence, which terms shall survive any termination of this Sub-Licence.
   For the avoidance of doubt copies of parts of the Licensed Work incorporated
   in course packs, study packs, course notes, multi-media works and Academic Works
   in accordance with Clauses 3.1.5 and 3.1.11 may be deposited by Authorised Institutions
   and Authorised Users in institutional repositories and archives or other repositories
   with the written consent of the Licensor.</p>
  <h3>10. ACKNOWLEDGEMENT AND PROTECTION OF INTELLECTUAL PROPERTY RIGHTS</h3>
  <p>10.1 The Authorised Institution acknowledges that the Intellectual Property Rights
   in the Licensed Work, Digital Data and/or Digital Maps (save for the Intellectual
   Property Rights in the software used by a Datacentre in the creation of Digital
   Maps and any Intellectual Property Rights in any Service or Open Access Service
   provided by a Datacentre other than the Licensed Work and Digital Maps themselves)
   are the sole and exclusive property of British Geological Survey (NERC) or are
   duly licensed to British Geological Survey (NERC) and that this Sub-Licence
   does not assign or transfer to the Authorised Institution any right, title or
   interest therein except for the right to use the Licensed Work in accordance
   with the terms and conditions of this Sub-Licence.</p>
  <h3>11. REPRESENTATIONS, WARRANTIES AND INDEMNIFICATION</h3>
  <p>11.1 The Authorised Institution represents and warrants that it has sufficient
   authority and rights to enter into and perform its obligations under this Sub-Licence.</p>
  <p>11.2 JISC Collections represents and warrants that it has the right to grant
   the Sub-Licence and that the use of the Licensed Work by the Authorised Institution
   and Authorised Users in accordance with the terms of this Sub-Licence shall
   not infringe the copyright of any third party. The foregoing shall not apply
   to improper usage of the Licensed Work by the Authorised Institution or Authorised
   Users.
  </p>
  <p>11.3 Other than the express warranties stated in this Clause 11, the Licensed
   Work is provided on an &quot;as is&quot; basis, and JISC Collections and the
   British Geological Survey hereby disclaim any and all warranties, conditions,
   or representations (express, implied, oral or written), relating to the Licensed
   Work or any part thereof, including, without limitation any and all warranties
   of quality, performance, merchantability or fitness for a particular purpose,
   that the Licensed Work is complete or error free or that (subject to clause
   11.2) its use by the Authorised Institution and Authorised Users will not constitute
   any libel, breach of confidence or infringement of the intellectual property
   rights of any third party.</p>
  <p>11.4 The Authorised Institution agrees to notify the British Geological Survey
   and JISC Collections immediately and provide full particulars in the event that
   it becomes aware of any actual or threatened claims by any third party in connection
   with any works contained in the Licensed Work. It is expressly agreed that upon
   such notification, or if the British Geological Survey becomes aware of such
   a claim from other sources, the British Geological Survey may remove such work(s)
   from the Licensed Work. At the request of the British Geological Survey, the
   Authorised Institution will make all reasonable efforts to remove such work(s)
   from any copies of the Licensed Work maintained by the Authorised Institution.
   Failure to report knowledge of any actual or threatened claim by any third party
   shall be deemed a material breach of this Sub-Licence.</p>
  <p>11.5 Nothing in this Sub-Licence shall make the Authorised Institution liable
   for breach of the terms of this Sub-Licence by any Authorised User provided
   that the Authorised Institution did not cause, knowingly assist or condone the
   continuation of such breach after becoming aware of a an actual breach having
   occurred. For the avoidance of doubt, this clause does not limit or exclude
   any liability the Authorised Institution may have for any breach of clause 5.</p>
  <p>11.6 Subject to the above and to the extent permitted by law, JISC Collections
   and the British Geological Survey shall not be liable to the Authorised Institution
   or any Authorised User for any indirect losses or damages (including loss or
   damage suffered by the Authorised Institution or any Authorised User as a result
   of an action brought by a third party)or for any loss of profits, goodwill or
   contract (whether direct or indirect) arising as a result of any breach of this
   Agreement, any negligence or in any other way out of or in connection with this
   Agreement or its subject matter. JISC Collections and the British Geological
   Survey accept no liability for any loss suffered or incurred by the Authorised
   Institution or Authorised Users as a result of their use of or reliance on the
   Licensed Work.</p>
  <p>11.7 The Authorised Institution represents to JISC Collections that its computer
   system through which the Licensed Work will be used is configured, and procedures
   are in place, to prohibit access to the Licensed Work by any person other than
   an Authorised User; that it shall inform Authorised Users about the conditions
   of use of the Licensed Work; and that during the term of this Sub-Licence, the
   Authorised Institution will continue to make all reasonable efforts to bar non-permitted
   access and to convey appropriate use information to its Authorised Users.</p>
  <p>11.8 JISC Collections, the British Geological Survey and the Authorised Institution
   do not seek to exclude liability under this Agreement for fraud or for personal
   injury or death caused by its negligence and the negligence of its employees,
   authorised sub-contractors and agents.</p>
  <h3>12. FORCE MAJEURE</h3>
  <p>12.1 Either party&rsquo;s failure to perform any term or condition of this Sub-Licence
   as a result of circumstances beyond the control of the relevant party (including
   without limitation, war, strikes, flood, governmental restrictions, and power,
   telecommunications or Internet failures or damages to or destruction of any
   network facilities) [&quot;Force Majeure&quot;] shall not be deemed to be, or
   to give rise to, a breach of this Sub-Licence.</p>
  <p>12.2 If either party to this Sub-Licence is prevented or delayed in the performance
   of any of its obligations under this Sub-Licence by Force Majeure and if such
   party gives written notice thereof to the other party specifying the matters
   constituting Force Majeure together with such evidence as it reasonably can
   give and specifying the period for which it is estimated that such prevention
   or delay will continue, then the party in question shall be excused the performance
   or the punctual performance as the case may be as from the date of such notice
   for so long as such cause of prevention or delay shall continue.</p>
  <h3>13. ASSIGNMENT</h3>
  <p>13.1 Neither this Sub-Licence nor any of the rights and obligations under it
   may be assigned or sub-licensed by the Authorised Institution without obtaining
   the prior written consent of JISC Collections or HEFCE, after an assignment
   by JISC Collections to HEFCE, such consent not to be unreasonably withheld or
   delayed. In any permitted assignment, the assignor shall procure and ensure
   that the assignee shall assume all rights and obligations of the assignor under
   this Sub-Licence and agrees to be bound to all the terms of this Sub-Licence.</p>
  <p>13.2 Notwithstanding the provisions of Clause 13.1, this Sub-Licence may not
   be assigned by the Authorised Institution to any organisation that is not an
   Institution.
  </p>
  <h3>14. GOVERNING LAW AND DISPUTE RESOLUTION</h3>
  <p>This Sub-Licence shall be governed by and construed in accordance with English
   law and the parties irrevocably agree that any dispute arising out of or in
   connection with this Sub-Licence will be subject to and within the jurisdiction
   of the English courts.</p>
  <p>14.2 Where the parties agree that a dispute arising out of or in connection with
   this Sub-Licence would best be resolved by the decision of an expert, they will
   agree upon the nature of the expert required and together appoint a suitable
   expert by agreement. In default of agreement upon whom to appoint as a suitable
   expert, such expert shall upon the request of either party be appointed by the
   Chair for the time being of Universities UK (<a href="http://www.universities.ac.uk">http://www.universities.ac.uk</a>).</p>
  <p>14.3 Any person to whom a reference is made under Clause 14.2 shall act as expert
   and not as an arbitrator and his decision (which shall be given by him in writing
   and shall state the reasons for his decision) shall be final and binding on
   the parties except in the case of manifest error or fraud.</p>
  <p>14.4 Each party shall provide the expert with such information and documentation
   as he may reasonably require for the purposes of his decision.</p>
  <p>14.5 The costs of the expert shall be borne by the parties in such proportions
   as the expert may determine to be fair and reasonable in all circumstances or,
   if no determination is made by the expert, by the parties in equal proportions.</p>
  <h3>15. NOTICES</h3>
  <p>15.1 All notices required to be given under this Sub-Licence shall be given in
   writing in English and sent by electronic mail, fax or first class registered
   or recorded delivery to the relevant addressee at its address set out below,
   or to such other address as may be notified by either party to the other from
   time to time under this Sub-Licence, and all such notices shall be deemed to
   have been received (a) 24 hours after successful transmission in the case of
   electronic mail or fax; (b) fourteen (14) days after the date of posting in
   the case of first class registered or recorded delivery:</p>
  <p>
   <strong>if to JISC Collections:</strong>
   <br />Lorraine Estelle
   <br />Chief Executive Officer
   <br />JISC Collections
   <br />Brettenham House South
   <br />5 Lancaster Place
   <br />London WC2E 7EN
   <br />
   <a href="mailto:l.estelle@jisc.ac.uk">l.estelle@jisc.ac.uk</a>
  </p>


  <p>
   <strong>if to the British Geological Survey:</strong>
   <br />Dr R. Keith Westhead
   <br />Head of Knowledge Exchange
   <br />British Geological Survey
   <br />Murchison House
   <br />Edinburgh EH9 3LA
   <br />Tel: 0131 650 0364
   <br />0797 327 0291 <a href="mailto:rkw@bgs.ac.uk">rkw@bgs.ac.uk</a>
  </p>


  <p>if to the Authorised Institution: [As stated in the Order Confirmation and Acceptance
   Form]
  </p>
  <h3>16. GENERAL</h3>
  <p>16.1 This Sub-Licence and its Schedules constitute the entire agreement between
   the parties relating to the Licensed Work and supersede all prior communications,
   understandings and agreements (whether written or oral) relating to its subject
   matter and may not be amended or modified except by agreement of both parties
   in writing.</p>
  <p>16.2 The Schedules shall have the same force and effect as if expressly set in
   the body of this Sub-Licence and any reference to this Sub-Licence shall include
   the Schedules.</p>
  <p>16.3 British Geological Survey may directly enforce and rely on the terms of
   this Sub-Licence that are expressed or intended to be for its benefit (including,
   but not limited to, clauses 3, 4, 5, 9.3,10 and 11) subject to and in accordance
   with the terms of this Sub-Licence under the provisions of the Contract (Rights
   of Third Parties) Act 1999, as amended or substituted from time to time. Otherwise,
   no provision of this Sub-Licence is intended to be enforceable by any person
   who is not a party to it.</p>
  <p>16.4 The invalidity or unenforceability of any provision of this Sub-Licence
   shall not affect the continuation in force of the remainder of this Sub-Licence.</p>
  <p>16.5 The rights of the parties arising under this Sub-Licence shall not be waived
   except in writing. Any waiver of any of a party&#39;s rights under this Sub-Licence
   or of any breach of this Sub-Licence by the other party shall not be construed
   as a waiver of any other rights or of any other or further breach. Failure by
   either party to exercise or enforce any rights conferred upon it by this Sub-Licence
   shall not be deemed to be a waiver of any such rights or operate so as to bar
   the exercise or enforcement thereof at any subsequent time or times.</p>
  <h3>APPENDIX 1: FEE AND PAYMENT TERMS</h3>
  <p>1.By completing the Order Confirmation and Acceptance Form as part of the JISC
   Collections online ordering service, the Authorised Institution accepts the
   terms of this Sub-Licence and accepts that it must pay to JISC Collections the
   total sum of the charges for the whole term of this Sub-Licence in accordance
   with the applicable JISC Collections charging band. JISC Collections or a JISC
   Collections&rsquo; authorised agent will invoice the Authorised Institution
   annually for the applicable charge as set out below. All prices are exclusive
   of VAT, which will be payable where applicable.</p>
  <table border="1px solid black">
   <tr>
    <td>JISC BANDS</td>
    <td>1 August 2010 - 31 July 2011</td>
    <td>1 August 2011 - 31 July 2012</td>
    <td>1 August 2012 - 31 July 2013</td>
    <td>1 August 2013 - 31 July 2014</td>
    <td>1 August 2014 - 31 July 2015</td>
    <td>1 August 2015 - 31 July 2016</td>
   </tr>
   <tr>
    <td>A - B</td>
    <td>&pound;1,338</td>
    <td>&pound;1,378</td>
    <td>&pound;1,419</td>
    <td>&pound;1,462</td>
    <td>&pound;1,506</td>
    <td>&pound;1,551</td>
   </tr>
   <tr>
    <td>C - D</td>
    <td>&pound;986</td>
    <td>&pound;1,016</td>
    <td>&pound;1,046</td>
    <td>&pound;1,077</td>
    <td>&pound;1,110</td>
    <td>&pound;1,143</td>
   </tr>
   <tr>
    <td>E - F</td>
    <td>&pound;519</td>
    <td>&pound;535</td>
    <td>&pound;551</td>
    <td>&pound;567</td>
    <td>&pound;584</td>
    <td>&pound;602</td>
   </tr>
   <tr>
    <td>G - J</td>
    <td>&pound;290</td>
    <td>&pound;299</td>
    <td>&pound;308</td>
    <td>&pound;317</td>
    <td>&pound;326</td>
    <td>&pound;336</td>
   </tr>
  </table>
  <br />
  <p>2. For the avoidance of doubt the term of this Sub-Licence will commence upon
   the date of receipt by JISC Collections of the Order Confirmation and Acceptance
   Form and will remain in full force and effect until the date of termination
   as set out in Clause 9.</p>
  <p>3. In the event that the Authorised Institution completes the Order Confirmation
   and Acceptance Form, as part of the JISC Collections online ordering service
   during a given year, the Authorised Institution shall pay JISC Collections that
   part of the applicable charge which represents the period covering the date
   as set out in the Order Confirmation and Acceptance Form up to the date where
   the next 12 months subscription period starts. Thereafter the Authorised Institution
   will pay JISC Collections the full applicable charges for subsequent years as
   and where applicable.</p>
  <p>4. JISC Collections hereby reserves the right to vary the charges payable by
   the Authorised Institution for years subsequent to the year in which the Authorised
   Institution sign up.</p>
  <h3>APPENDIX 2: LICENSED WORK (amended by the 2nd Variation Agreement 1st October
   2013)
  </h3>
  <p>The Licensed Work consists of the following datasets:</p>

  <ol>
   <li>
    <strong>1:250,000 scale themes (GB coverage - vector data)</strong>
    <ul>
     <li>bedrock geology</li>
     <li>superficial deposits (if BGS digitisation programme is complete)</li>
    </ul>
   </li>

   <li>
    <strong>1:50,000 scale themes (GB coverage - vector data)</strong>
    <ul>
     <li>bedrock geology</li>
     <li>superficial deposits</li>
     <li>mass movement deposits</li>
     <li>artificial ground</li>
    </ul>
   </li>

   <li>
    <strong>The BGS lexicon of named rock units</strong>
    <ul>
     <li>The BGS Lexicon of Named Rock Units is a relational database which holds definitive
      and readily accessible information about all geological units used in BGS
      maps and publications. Lexicon entries include rock unit name, map code,
      parent rock units, lower and upper boundaries, thickness, geographical extent
      and bibliographic references. The Lexicon adds value to the geological digital
      maps and support documentation.</li>
    </ul>
   </li>

   <li>
    <strong>Lithoframe 3D model data</strong>
    <ul>
     <li>LithoFrame is a new concept to produce models of Britain&#39;s subsurface
      geology; the 3D equivalent of the geological map. The 3D model data shall
      be added to the Licensed Work from time to time as and when supplied by the
      Licensor to the Licensee.</li>
     <li>4.1. Models are systematically developed at a range of resolutions. The following
      are supplied under the agreement:
      <ul>
       <li>LithoFrame 1M - nationwide for use at a scale of 1:1 000 000 for onshore
        Britain. It shows the most significant stratigraphic divisions (e.g. base
        Carboniferous, top of major intrusive bodies) and major faults in a single
        model, down from the ground surface to the base of the Earth&#39;s crust
        (40 km).</li>
       <li>LithoFrame50 (area of London) will be modelled at the formation level (e.g.
        base London Clay Formation, base Harwich Formation) and will reach around
        1 km in depth</li>
       <li>LithoFrame10(area of Glasgow) is the highest resolution, with a focus on
        well-characterised and relatively shallow superficial deposits including,
        where appropriate, the subdivision of artificial ground, flood plain, and
        river terrace deposits.</li>
      </ul>
     </li>

     <li>These data will be supplied as ESRI shapes and grids. The shapes will give
      the horizontal extent of each modelled unit, the grids will give elevations
      of top and base of each modelled unit.</li>
     <li>4.2. GSI3D software and sample data (which is also available for down from
      the following site http://www.gsi3d.org/downloads.html)</li>
    </ul>
   </li>

   <li>
    <strong>Offshore data</strong>
    <ul>
     <li>5.1. DigRock250 (1:250,000 scale offshore bedrock geology),</li>
     <li>5.2. DigSBS250 (offshore 1:250,000 scale seabed sediment data)</li>
    </ul>
   </li>

   <li>
    <strong>Access to the BGS GeoScenic Photo archive</strong>
    <ul>
     <li>The GeoScenic archive contains images from the vast collections of geological
      photographs held by the British Geological Survey. Download of 1000 x 1000
      pixel images is free for all non-commercial use, provided BGS is acknowledged
      when using the images (see Terms and Conditions link below for information
      on acknowledgement text)</li>
     <li>BGS will provide EDINA with a metadata table listing all photos in the archive
      including information on the location of the photo (longitude and latitude),
      the caption to be used and the link to access the photo from the BGS service.</li>
    </ul>
   </li>


   <li>
    <strong>Access to the Borehole Scans</strong>
    <ul>
     <li>BGS grants EDINA access to the National Geoscience Data Centre collection
      of onshore scanned boreholes, shafts and well records. Confidential scans
      will not be supplied.</li>
     <li>BGS will provide EDINA with a GIS file of the Single Onshore Borehole Index
      (SOBI) that shows the location and ID of every borehole BGS have records
      for (including confidential boreholes). BGS will provide EDINA with the html
      string to parse to the start of the borehole ID which will enable access
      of the borehole scans from the BGS service. Scans of confidential boreholes
      will not open.</li>
    </ul>
   </li>

   <li>
    <strong>1:10,000 scale themes (GB coverage - vector data)</strong>Added October 1st
    2013
    <ul>
     <li>bedrock geology</li>
     <li>superficial deposits</li>
     <li>mass movement deposits</li>
     <li>artificial ground</li>
     <li>linear features</li>
    </ul>
   </li>

   <li>
    <strong>Soil Parent Material Model</strong>(Added October 1st 2013)
    <ul>
     <li>A parent material is a soil-science name for a weathered rock or deposit from,
      and within which a soil has formed. The Parent Material Model details over
      30 rock and sediment characteristics; it builds upon the standard DiGMapGB-50
      geological dataset, adding simplified classifications of lithological properties.</li>
     <li>The attribute content includes a range of texture information, colour, structure,
      mineralogy, lithology, carbonate content and genetic origin. Users can pick
      any or all of these parameters in bundles of data specific to their needs.</li>
    </ul>
   </li>

   <li>
    <strong>Geological Indicators of Flooding</strong>(Added October 1st 2013)
    <ul>
     <li>Geological maps show where all the floodplains and coastal plains in Britain
      are located and therefore the main areas at greatest risk of flooding; from
      this information BGS has produced the Geological indicators of flooding dataset.</li>
     <li>The map shows areas vulnerable to two main types of flooding - inland (river
      floodplains) and coastal/estuarine.</li>
    </ul>
   </li>

   <li>
    <strong>Permeability</strong>(Added October 1st 2013)
    <ul>
     <li>The permeability indices are based on information from the 1:50 000 geological
      map and considers the following:
      <ul>
       <li>the predominant flow mechanism, either intergranular flow, fracture flow,
        or a mixture of intergranular and fracture flow</li>
       <li>a maximum permeability index</li>
       <li>a minimum permeability index</li>
      </ul>
     </li>
    </ul>
   </li>

   <li>
    <strong>Superficial Deposits Thickness Model</strong>(Added October 1st 2013)</li>
   <li>
    <strong>DiGMapGB-25</strong>(Added October 1st 2013)
    <ul>
     <li>1:25,000 scale themes (GB coverage - vector data)</li>
    </ul>
   </li>

  </ol>


  <h4>Delivery formats:</h4>
  <ul>
   <li>ESRI Shapefile format</li>
   <li>MapInfo MIF/MID format</li>
   <li>Data delivered as tables will be supplied in Microsoft Excel format</li>
  </ul>

  <h4>ORDER CONFIRMATION AND ACCEPTANCE FORM</h4>
  <p>[<em>See printer friendly version</em>]</p>
 </div>
   `,
  help: {
    left: {
      text: "Help",
      link: "/webhelp/geology/geologydigimaphelp.htm"
    },
    right: {
      text: "FAQ",
      link: "/webhelp/geology/geologydigimaphelp.htm#faqs_and_known_issues/faqs.htm"
    }
  },
  apps: [{
    id: "GEOLOGYMAPPER",
    name: "Geology Roam",
    link: "/roam/geology",
    description: "View, annotate and print Geology maps at user defined scales",
    infoContent: `
      <p class="help-text">
        Ancient Roam allows you to view historical Ordnance Survey maps from the 1840s to the 1990s. Zoom through 12 different levels from maps at 1:500 to 1:10 560 in scale. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, points, lines and areas)</li>
        <li>identify publishing date by clicking on the map</li>
        <li>compare two maps of different dates side by side</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `
  }, {
    id: "GEOLOGYDOWNLOAD",
    name: "Geology Data Download",
    link: "/datadownload/geologydownload",
    description: "Download Geology data for use in GIS/CAD",
    infoContent: `
      <p class="help-text">
        Historic Download allows you to select and download historical Ordnance Survey maps from Landmark Information Group for use in graphics, GIS or CAD software.
      </p>
    `,
    ipAccessRestricted: true
  }]
}, {
  id: "marine",
  name: "Marine",
  icon: `
    <svg x="0px" y="0px" width="68.029px" height="68.029px" viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029">
      <g>
        <g>
          <polygon points="61.52,45.134 61.392,43.374 61.233,41.808 61.073,40.527 60.912,39.599 60.752,39.214 60.593,39.183
            60.307,39.214 59.891,39.31 59.411,39.47 58.867,39.663 58.259,39.919 57.589,40.206 56.885,40.527 56.15,40.878 55.383,41.231
            54.647,41.648 53.913,42.03 53.209,42.447 52.506,42.863 51.899,43.279 51.323,43.663 50.94,43.983 50.588,44.271 50.365,44.494
            50.205,44.718 50.141,44.91 50.205,45.103 50.332,45.294 50.62,45.486 53.561,47.279 52.537,48.655 51.516,49.966 50.525,51.182
            49.533,52.333 48.543,53.421 47.553,54.413 46.53,55.31 45.538,56.141 44.484,56.876 43.461,57.517 42.375,58.062 41.287,58.508
            40.169,58.861 38.987,59.116 37.804,59.276 36.557,59.341 36.557,22.353 36.78,22.288 37.643,21.968 38.444,21.585 39.209,21.073
            39.912,20.529 40.584,19.888 41.16,19.217 41.703,18.449 42.15,17.649 42.534,16.785 42.854,15.857 43.077,14.897 43.237,13.906
            43.268,12.881 43.237,11.826 43.077,10.801 42.854,9.809 42.534,8.882 42.15,7.986 41.703,7.185 41.16,6.418 40.584,5.682
            39.912,5.074 39.209,4.498 38.444,4.018 37.643,3.602 36.78,3.282 35.885,3.027 34.99,2.899 34.032,2.834 33.073,2.899
            32.178,3.027 31.283,3.282 30.42,3.602 29.621,4.018 28.854,4.498 28.152,5.074 27.48,5.682 26.873,6.418 26.362,7.185
            25.881,7.986 25.499,8.882 25.178,9.809 24.954,10.801 24.795,11.826 24.764,12.881 24.764,13.201 24.795,13.489 24.795,13.809
            24.826,14.098 24.858,14.322 24.891,14.513 24.922,14.706 24.954,14.928 25.147,15.76 25.402,16.561 25.721,17.329 26.106,18.064
            26.552,18.737 27.031,19.377 27.575,19.985 28.152,20.529 28.758,21.008 29.429,21.456 30.133,21.841 30.836,22.161
            31.604,22.416 31.635,22.423 31.635,59.341 30.389,59.276 29.173,59.116 27.991,58.861 26.841,58.508 25.721,58.062
            24.666,57.517 23.612,56.876 22.557,56.141 21.533,55.31 20.543,54.413 19.522,53.421 18.53,52.333 17.507,51.182 16.516,49.966
            15.494,48.655 14.471,47.279 17.411,45.486 17.699,45.294 17.826,45.103 17.891,44.91 17.826,44.718 17.666,44.494 17.444,44.271
            17.092,43.983 16.708,43.663 16.133,43.279 15.526,42.863 14.823,42.447 14.119,42.03 13.384,41.648 12.65,41.231 11.882,40.878
            11.147,40.527 10.445,40.206 9.773,39.919 9.165,39.663 8.622,39.47 8.143,39.31 7.726,39.214 7.44,39.183 7.28,39.214
            7.119,39.599 6.96,40.527 6.8,41.808 6.64,43.374 6.513,45.134 6.448,46.894 6.448,48.589 6.544,50.126 6.609,50.67 6.672,51.085
            6.736,51.437 6.832,51.694 6.96,51.822 7.152,51.886 7.407,51.822 7.726,51.662 10.636,49.838 10.987,50.542 11.37,51.245
            11.818,51.918 12.266,52.621 12.778,53.325 13.287,53.997 13.831,54.7 14.438,55.373 15.046,56.044 15.685,56.684 16.356,57.325
            17.027,57.964 17.763,58.573 18.498,59.181 19.234,59.757 20.032,60.301 20.799,60.844 21.631,61.356 22.461,61.835
            23.292,62.284 24.155,62.732 25.02,63.116 25.881,63.5 26.776,63.852 27.672,64.14 28.567,64.427 29.494,64.653 30.42,64.845
            31.315,65.003 32.242,65.101 33.168,65.163 34.096,65.197 35.024,65.163 35.918,65.101 36.844,65.003 37.74,64.845 38.666,64.653
            39.563,64.427 40.456,64.14 41.351,63.852 42.215,63.5 43.11,63.116 43.972,62.732 44.803,62.284 45.633,61.835 46.465,61.356
            47.265,60.844 48.065,60.301 48.83,59.757 49.566,59.181 50.301,58.573 51.036,57.964 51.707,57.325 52.379,56.684 53.018,56.044
            53.625,55.373 54.2,54.7 54.744,53.997 55.287,53.325 55.766,52.621 56.215,51.918 56.662,51.245 57.045,50.542 57.397,49.838
            60.307,51.662 60.625,51.822 60.88,51.886 61.073,51.822 61.201,51.694 61.297,51.437 61.361,51.085 61.424,50.67 61.488,50.126
            61.582,48.589 61.582,46.894     "/>
        </g>
      </g>
    </svg>
  `,
  description: "Marine Digimap offers a range of hydrographic map and data products from SeaZone.",
  subscriptionRequired: true,
  licenceUrl: "/webhelp/marine/copyright_and_terms_of_use/licence_agreement.htm",
  licence: `
 <div class=licence-text>
  <h2>Seazone Solutions Marine Data Sub-Licence Agreement (2014 - 2016)</h2>
  <p>
   <span class="bold">JISC COLLECTIONS AND JANET LIMITED (TRADING AS JISC COLLECTIONS)
   </span> (Company Number 2881024), a company incorporated in England and Wales
   whose registered office is at Lumen House, Library Avenue, Harwell Oxford, Didcot,
   Oxfordshire, OX11 0SG (&quot;Jisc Collections&quot;).</p>
  <p>OFFERS to you, the Sub-Licensee, the permission to access and use the Licensed
   Work and Digital Maps on the terms and conditions as set out in this Sub-Licence.
   Upon completion of the Order Confirmation and Acceptance Form, as part of the
   Jisc Collections online ordering service your institution will become a non-exclusive
   Sub-Licensee of Jisc Collections.</p>
  <p>Acceptance shall be by receipt of the Order Confirmation and Acceptance Form
   as part of the Jisc Collections online ordering service by Jisc Collections
   or a Jisc Collections authorised agent who will accept delivery on behalf of
   Jisc Collections. Acceptance shall be acceptance of all terms of this Sub-Licence.
   In the event that no or partial compliance is made as to the manner or form
   described for acceptance, no sub-licence will be granted and this offer is deemed
   withdrawn.
  </p>
  <p>
   <span class="bold">RECITALS</span>
  </p>
  <p>
   <span class="bold">WHEREAS</span> the HR Wallingford Ltd. trading as &quot;SeaZone Solutions&quot;
   Marine Data consists of two types of data HydroSpatial and Charted Raster, with
   HydroSpatial consisting of 6 topics: Bathymetry and Elevation, Natural and Physical
   Features, Structures and Obstructions, Socio-economic and Marine Use, Conservation
   and Environmental Protection, Climate and Oceanography. (&quot;Licensed Work&quot;);</p>
  <p>as detailed in Appendix 2:</p>
  <p>
   <span class="bold">AND WHEREAS</span> the HR Wallingford Ltd. trading as &quot;SeaZone Solutions&quot;
   Marine Data and all Intellectual Property Rights (as hereafter defined) therein
   are owned by or licensed to HR Wallingford Ltd. trading as &quot;SeaZone Solutions&quot;</p>
  <p>
   <span class="bold">AND WHEREAS</span> by an agreement between HR Wallingford Ltd. trading as &quot;SeaZone
   Solutions&quot; and Jisc Collections (the &quot;SeaZone Solutions Marine Data
   Supply and Licence Agreement&quot;) dated 29th November 2010, Jisc Collections
   is permitted to sub-license the access and use of SeaZone Solutions Data (the
   Licensed Work) to the Sub-Licensees in accordance with the terms of this Sub-Licence;</p>
  <p>
   <span class="bold">JISC COLLECTIONS AND THE SUB-LICENSEE AGREE AS FOLLOWS:</span>
  </p>
  <h3>1. DEFINITIONS</h3>
  <p>1.1 In this Sub-Licence, the following expressions shall have the following meanings:
  </p>
  <p style="margin-left: 40px;">&quot;Authorised Institution&quot;</p>
  <p style="margin-left: 40px;">means an institution that has accepted the terms and conditions of the Subscription
   Order and Acceptance Form as part of the Sub-Licence Agreement for as long as
   such agreement remains in effect.</p>
  <p style="margin-left: 40px;">&quot;Authorised Users&quot;</p>
  <p style="margin-left: 40px;">means any students of, staff (both current or retired) of, or visitors to an
   Authorised Institution who are both properly:
  </p>
  <p style="margin-left: 40px;">(i) authorised by an Authorised Institution to access the Authorised Institution's
   electronic information services via secure authentication;
   <span class="bold">and</span>
  </p>
  <p style="margin-left: 40px;">(ii) registered with a Datacentre in accordance with the procedure as set out
   in Appendix 3.;</p>
  <p style="margin-left: 40px;">for the avoidance of doubt, students who are registered at an overseas campus
   of an Authorised Institution ("<span class="bold">Overseas Students</span>") <span class="bold">do not</span> qualify as "Authorised Users" of that Authorised
   Institution whilst they are overseas (studying or otherwise) However, Overseas
   Students may qualify as "Authorised Users" during any period spent studying
   in the UK at an Authorised Institution. Overseas Students will lose their Authorised
   User status as soon as they leave the United Kingdom.</p>
  <p style="margin-left: 40px;">Persons who are not a current student or member of staff of an Authorised Institution,
   but who are permitted to access the Authorised Institution's information services
   from computer terminals or otherwise within the physical premises of such Authorised
   Institution [&quot;Walk-In Users&quot;] are also deemed to be Authorised Users,
   only for the time they are within the physical premises of such Authorised Institution.
   Walk-In Users may not be given means to access the Licensed Work when they are
   not within the physical premises of such Authorised Institution. For the avoidance
   of doubt, Walk-In Users may not be given access to the Licensed Work by any
   wireless network provided by an Authorised Institution unless such network is
   a Secure Network.</p>
  <p style="margin-left: 40px;">&quot;Commercial Use&quot;</p>
  <p style="margin-left: 40px;">means the use of the whole or any part of the Licensed Work and/or Digital Maps
   for purposes which either directly or indirectly generate revenue profit or
   otherwise realise any commercial gain For the avoidance of doubt neither the
   Fee nor the recovery of direct cost by the Sub-Licensee for Authorised Users
   constitutes commercial use.
  </p>
  <p style="margin-left: 40px;">&quot;Datacentre&quot;</p>
  <p style="margin-left: 40px;">means a datacentre appointed from time to time by Jisc Collections. At the time
   of this agreement the appointed datacentre is EDINA.</p>
  <p style="margin-left: 40px;">&quot;Digital Data&quot;</p>
  <p style="margin-left: 40px;">means that part of the Licensed Work that will be made available via Secure Authentication
   as digital data and not as Digital Maps.</p>
  <p style="margin-left: 40px;">&quot;Digital Maps&quot;</p>
  <p style="margin-left: 40px;">means any or all of the maps created by a Datacentre from the Licensed Work to
   be used in a Service provided by a Datacentre.</p>
  <p style="margin-left: 40px;">&quot;EDINA&quot;</p>
  <p style="margin-left: 40px;">means the national datacentre based at Edinburgh University Data Library which
   offers the UK tertiary education and research community networked access to
   a library of data, information and research resources.
  </p>
  <p style="margin-left: 40px;">&quot;Educational Purposes&quot;</p>
  <p style="margin-left: 40px;">means for the purpose of education, teaching, distance learning, private study
   and/or research.</p>
  <p style="margin-left: 40px;">&quot;Fee&quot;</p>
  <p style="margin-left: 40px;">means the fee as set out in Appendix 1.</p>
  <p style="margin-left: 40px;">&quot;HEFCE&quot;</p>
  <p style="margin-left: 40px;">means the Higher Education Funding Council for England.</p>
  <p style="margin-left: 40px;">&quot;Institution&quot;</p>
  <p style="margin-left: 40px;">means a higher, further education institution or other organisations in the UK
   whose name appears on the list of eligible institutions as found on http://www.jisc-collections.ac.uk/Help-and-information/Jisc-Banding/.</p>
  <p style="margin-left: 40px;">&quot;Intellectual Property Rights&quot;</p>
  <p style="margin-left: 40px;">means patents, trademarks, trade names, design rights, copyright (including rights
   in computer software and moral rights), database rights, rights in know-how
   and other intellectual property rights, in each case whether registered or unregistered
   and including applications for the grant of any of the foregoing and all rights
   or forms of protection having equivalent or similar effect to any of the foregoing
   which may subsist anywhere in the world.</p>
  <p style="margin-left: 40px;">&quot;Licensed Work&quot;</p>
  <p style="margin-left: 40px;">means the collection of SeaZone Solutions' digital data products known to the
   parties as "SeaZone Solutions Marine Data" comprising the products as listed
   in Appendix 2 and such other SeaZone Solutions data products as Jisc Collections
   and SeaZone Solutions may agree from time to time.</p>
  <p style="margin-left: 40px;">&quot;Service&quot;</p>
  <p style="margin-left: 40px;">means a service provided by JISC Collections or any Datacentre acting on its
   behalf such as but not limited to Digimap, to include "SeaZone Solutions Marine
   Data".
  </p>
  <p style="margin-left: 40px;">&quot;Secure Authentication&quot;</p>
  <p style="margin-left: 40px;">means access to the Licensed Work by UK Access Management Federation compliant
   technology, Internet Protocol ("IP") ranges or by a username and password provided
   by the Institution or by another means of authentication agreed between the
   Publisher and the Institution.</p>
  <p style="margin-left: 40px;">&quot;Secure Network&quot;</p>
  <p style="margin-left: 40px;">means a network which is only accessible by Secure Authentication.</p>
  <p style="margin-left: 40px;">&quot;Sub-Licensee&quot;</p>
  <p style="margin-left: 40px;">means the sub-licensee whose details are set out in the Order Confirmation and
   Acceptance Form, as part of the Jisc Collections online ordering service which
   can be found at www.jisc-collections.ac.uk. a sample copy of the form is attached
   hereto .and made a part hereof.</p>
  <p style="margin-left: 40px;">&quot;Use&quot;</p>
  <p style="margin-left: 40px;">means viewing, copying, adaptation, reproduction, manipulation or modification
   of the Digital Data to create customised maps and models and any further use
   of such customised maps and models by Authorised Users in accordance with Clauses
   3 and 4 of this Sub-Licence Agreement.
  </p>
  <p>1.2 Headings contained in this Sub-Licence are for reference purposes only and
   shall not be deemed to be an indication of the meaning of the clause to which
   they relate.</p>
  <p>1.3 Where the context so implies, words importing the singular number shall include
   the plural and vice versa and words importing the masculine shall include the
   feminine and vice versa.</p>
  <h3>2. GRANT OF SUB-LICENCE</h3>
  <p>2.1 The Sub-Licensee agrees to pay the Fee set out in Appendix 1, in consideration
   of which Jisc Collections agrees to grant to the Sub-Licensee a non-exclusive
   revocable sub-licence to access and use the Licensed Work and Digital Maps and
   to allow Authorised Users to access and use the Licensed Work and Digital Maps
   throughout the term of this Sub-Licence by Secure Authentication for Educational
   Purposes only Commercial Use is prohibited.</p>
  <p>2.2 This Sub-Licence supersedes and replaces all previous agreements and licences
   between the Sub-Licensee and the Higher Education Funding Council for England
   in relation to the Licensed Work, together with any variations thereto, in their
   entirety.
  </p>
  <h3>3. USE OF THE LICENSED WORK</h3>
  <p>3.1 Subject to the provisions of Appendices 3 and 4, throughout the term of this
   Sub-Licence the Sub-Licensee may for Educational Purposes only:
  </p>
  <p>3.1.1 make such temporary local electronic copies of parts of the Licensed Work
   and Digital Maps as are necessary to ensure efficient use by Authorised Users,
   provided that such use is subject to all the terms and conditions of this Sub-Licence;</p>
  <p>3.1.2 allow Authorised Users to access the Licensed Work and Digital Maps by
   Secure Authentication in order to search, retrieve, display and view, and otherwise
   use parts thereof:</p>
  <p>3.1.3 allow Authorised Users to electronically save parts of the Licensed Work
   and Digital Maps;</p>
  <p>3.1.4 allow Authorised Users to print out copies of parts of the Licensed Work
   and Digital Maps;</p>
  <p>3.1.5 allow Authorised Users to incorporate parts of the Licensed Work and Digital
   Maps in printed and electronic course packs, study packs and course notes hosted
   on a Secure Network, virtual learning environments, managed learning environments
   and multi-media works. Each item shall carry the following copyright notice
   Each copy shall carry the following copyright notice "&copy; Crown Copyright/SeaZone
   Solutions. All Rights Reserved. Licence No. 052006.001 31st July 2011. Not to
   be Used for Navigation". Course packs in non-electronic non-print perceptible
   form, such as Braille, may also be offered to Authorised Users;</p>
  <p>3.1.6 allow Authorised Users to incorporate parts of the Licensed Work and Digital
   Maps in printed or electronic form in assignments and portfolios, theses and
   in dissertations ("the Academic Works"), including reproductions of the Academic
   Works for personal use and library deposit, if such use conforms to the customary
   and usual practice of the Sub-Licensee. Reproductions in printed or electronic
   form of Academic Works containing Digital Maps only may be provided to sponsors
   of such Academic Works. Reproductions in electronic form of Academic Works containing
   Digital Data may only be provided to sponsors of such Academic Works where such
   sponsor holds a licence from the Licensor to use Digital Data. Reproductions
   in printed form of Academic Works containing Digital Data may be provided to
   sponsors of such Academic Works. In each case, each item shall carry the following
   copyright notice "&copy; Crown Copyright/SeaZone Solutions. All Rights Reserved.
   052006.001 31st July 2011 Not to be Used for Navigation". Sponsors of Academic
   Works may not use any Reproductions provided to them under the provisions of
   this Clause 3.1.6 for any Commercial Use; and</p>
  <p>3.1.7 incorporate parts of the Digital Maps in printed and electronic conference
   papers, articles, articles published in a journal publication and poster sessions;</p>
  <p>3.1.8 provide printed or electronic copies of the Licensed Work and Digital Maps
   at the request of individual Authorised Users;</p>
  <p>3.1.9 supply to an authorised user of another Institutional library (whether
   by post, fax or secure electronic transmission, using Ariel or its equivalent,
   whereby the electronic file is deleted immediately after printing) a single
   paper copy of parts of the Licensed Work. Each copy shall carry the following
   copyright notice "&copy; Crown Copyright/SeaZone Solutions. All Rights Reserved.
   052006.001 31st July 2011 Not to be Used for Navigation";</p>
  <p>3.1.10 display, download and print parts of the Licensed Work and Digital Maps
   for the purpose of promotion of the Licensed Work, testing of the Licensed Work
   and Digital Maps, or for training Authorised Users;</p>
  <p>3.1.11 publicly display or publicly perform parts of the Licensed Work and Digital
   Maps as part of a presentation at a seminar, conference, or workshop, or other
   such similar activity;</p>
  <p>3.1.12 make such copies of training material and network on a Secure Network
   such training material as may be required for the purpose of using the Licensed
   Work and Digital Maps in accordance with this Sub-Licence.</p>
  <p>3.1.13 use Digital Maps in brochures, leaflets and flyers for use by the Sub-Licensee;</p>
  <p>3.1.14 publish Digital Maps on the website of the Sub-Licensee or websites created
   by Authorised Users as part of a course or project;</p>
  <p>3.1.15 print and use copies of the Licensed Work and Digital Maps as part of
   a Post Graduate Certificate in Education course in schools.</p>
  <p>3.2 Nothing in this Sub-Licence shall constitute a waiver of any statutory right
   available and held by the Sub-Licensee and/or Authorised Users from time to
   time under the Copyright, Designs and Patents Act 1988 or any amending legislation.</p>
  <h3>4. RESTRICTIONS</h3>
  <p>4.1 Save as provided herein, the Sub-Licensee and Authorised Users may not:
  </p>
  <p>4.1.1 sell, resell the Licensed Work and/or Digital Maps unless the Sub-Licensee
   has been granted prior written consent by SeaZone Solutions to do so;</p>
  <p>4.1.2 redistribute, publish or otherwise make the information contained in the
   Licensed Work and Digital Maps available in any manner or on any media other
   than that allowed under this Agreement;</p>
  <p>4.1.3 remove, obscure or modify copyright notices, text acknowledgments or other
   means of identification or disclaimers as they appear;</p>
  <p>4.1.4 save in relation to Clauses 3.1.10, 3.1.11 and 3.1.14, display or distribute
   any part of the Licensed Work and Digital Maps on any electronic network, including
   without limitation the Internet and the World Wide Web, and any other distribution
   medium now in existence or hereinafter created, other than on a Secure Network;</p>
  <p>4.1.5 save in relation to Clauses 3.1.6, 3.1.9, 3.1.14 and 3.1.15, permit or
   allow anyone other than Authorised Users to access or use the Licensed Work
   and Digital Maps;</p>
  <p>4.1.6 use all or any part of the Licensed Work and Digital Maps for any Commercial
   Use or for any purpose other than Educational Purposes;</p>
  <p>4.1.7 save in relation to Clause 3.1.9, permit the Licensed Work to be electronically
   transmitted to any other recipient except where the recipient is an Authorised
   User under the terms of a valid SeaZone Solutions Sub-Licence Agreement.</p>
  <p>4.2 This Clause shall survive termination of this Sub-Licence for any reason.
  </p>
  <h3>5. RESPONSIBILITIES OF THE SUB-LICENSEE</h3>
  <p>5.1 The Sub-Licensee will:</p>
  <p>5.1.1 issue passwords or other access information only to Authorised Users and
   use all reasonable efforts to ensure that Authorised Users do not divulge their
   passwords or other access information to any third party;</p>
  <p>5.1.2 use all reasonable efforts, including without limitation by use of Secure
   Authentication, to ensure that only Authorised Users are permitted access to
   the Licensed Work and Digital Maps;</p>
  <p>5.1.3 use all reasonable efforts to ensure that all Authorised Users are made
   aware of and undertake to abide by the terms of this Sub-Licence;</p>
  <p>5.1.4 use all reasonable efforts to monitor compliance with the terms of this
   Sub-Licence and notify SeaZone Solutions Jisc Collections and the Datacentre
   immediately and provide full particulars on becoming aware of any of the following
   (a) any unauthorised access to or use of the Licensed Work and Digital Maps
   or unauthorised use of any of the Sub-Licensee's password(s); or (b) any breach
   by an Authorised User of the terms of this Sub-Licence. Upon becoming aware
   of any breach of the terms of this Sub-Licence the Sub-Licensee further agrees
   promptly to fully investigate and initiate disciplinary procedures in accordance
   with the Sub-Licensee's standard practice and use all reasonable effort to ensure
   that such activity ceases and to prevent any recurrence;</p>
  <p>5.1.5 comply with all computer security procedures required by SeaZone Solutions,
   Jisc Collections and/or the Datacentre and take all reasonable steps to ensure
   the security of the Licensed Work and Digital Maps in accordance with the Security
   Requirements set out in Appendix 3 hereto;</p>
  <p>5.1.6 where IP addresses are used as the method of Secure Authentication, provide
   lists of valid IP addresses to Jisc Collections and update those lists on a
   regular basis the frequency of which will be agreed by the parties from time
   to time;</p>
  <p>5.1.7 make available to SeaZone Solutions on request such information as SeaZone
   Solutions may reasonably require to use to better understand the type and nature
   of the specific Educational Purposes carried out by the Sub-Licensee and the
   Authorised Users using the Licensed Work and Digital Maps. In particular but
   without prejudice to the generality of the foregoing, SeaZone Solutions may
   use examples of such use for the preparation of case studies for marketing and
   developing the Licensed Work and Digital Maps.</p>
  <h3>6. RESPONSIBILITIES OF JISC COLLECTIONS</h3>
  <p>6.1 Jisc Collections shall use all reasonable efforts to ensure access and use
   of the Licensed Work in accordance with the provisions as laid down in this
   Sub-Licence.
  </p>
  <p>6.2 Jisc Collections shall use all reasonable efforts to cause customer support
   services to be provided to the Sub-Licensee and to Authorised Users.
  </p>
  <h3>7. USAGE DATA</h3>
  <p>7.1 The parties shall co-operate in gathering any data on usage of the Licensed
   Work that is available to them during the term of this Sub-Licence, and shall
   provide such data to each other upon request.</p>
  <h3>8. FEE</h3>
  <p>8.1 The Sub-Licensee shall pay an annual fee to Jisc Collections for the Sub-Licence
   in the amount and upon terms set out in Appendix 1.</p>
  <h3>9. TERM AND TERMINATION</h3>
  <p>9.1 The term of this Sub-Licence will commence upon the date of acceptance of
   this Licence via the Order Confirmation and Acceptance Form and will remain
   in full force and effect until the anniversary of this Licence [date], unless
   terminated earlier as provided for in this Clause 9.</p>
  <p>9.2 The Sub-Licensee may terminate this Agreement on 31st July 2012, 31st July
   2013, 31st July 2014, or 31st July 2015 by giving Jisc Collections sixty days
   notice to that effect.</p>
  <p>9.3 Either party may terminate this Sub-Licence at any time on the material breach
   or repeated other breaches by the other of any obligation on its part under
   this Sub-Licence by serving a written notice on the other identifying the nature
   of the breach. The termination will become effective thirty days after receipt
   of the written notice unless during the relevant period of thirty (30) days
   the defaulting party remedies the breach.</p>
  <p>9.4 SeaZone Solutions may terminate this Sub-Licence at any time on the material
   breach or repeated other breaches by the Sub Licensee or Authorised Users of
   any obligation on its part under this Sub-Licence by serving a written notice
   on the Sub Licensee identifying the nature of the breach. The termination will
   become effective thirty days after receipt of the written notice unless during
   the relevant period of thirty (30) days the Sub Licensee remedies the breach
   or causes it to be remedied (where the breach is by an Authorised User).</p>
  <p>9.5 Notwithstanding anything to the contrary herein, this Sub-Licence will automatically
   terminate if the Marine Data Supply and Licence Agreement between SeaZone Solutions
   and Jisc Collections terminates for any reason. Jisc Collections shall make
   reasonable endeavours not to cause the Marine Data Supply and Licence Agreement
   between SeaZone Solutions and Jisc Collections to terminate.</p>
  <p>9.6 Further, notwithstanding anything to the contrary herein, upon a breach by
   the Sub-Licensee, on-line access to the Licensed Work and Digital Maps shall
   be terminated.</p>
  <p>9.7 Upon termination of this Sub-Licence, copies of parts of Digital Maps made
   by the Sub-Licensee or Authorised Users may be retained and used subject to
   the terms of Clauses 3 and 4 of this Sub-Licence, which terms shall survive
   any termination of this Sub-Licence.</p>
  <p>9.8 Upon termination of this Sub-Licence, and only if requested by Jisc Collections
   all electronic copies of the Digital Data within the possession or control of
   the Sub-Licensee shall be deleted within thirty (30) days of such request and
   the Sub-Licensee shall confirm such deletion to Jisc Collections. The Sub-Licensee
   shall also use its reasonable endeavours to procure that any electronic copies
   of the Digital Data within the possession or control of the Authorised Users
   are also destroyed within the said period of thirty (30) days. For the avoidance
   of doubt, printed copies of the Digital Data may be retained and used subject
   to the terms of Clauses 3 and 4 of this Sub-Licence.</p>
  <h3>10. ACKNOWLEDGEMENT AND PROTECTION OF INTELLECTUAL PROPERTY RIGHTS</h3>
  <p>10.1 The Sub-Licensee acknowledges that all Intellectual Property Rights in the
   Licensed Work and Digital Maps (save for the Intellectual Property Rights in
   the software used by a Datacentre in the creation of Digital Maps and any Intellectual
   Property Rights in any Service or Open Access Service provided by a Datacentre
   other than the Licensed Work and Digital Maps themselves) are the sole and exclusive
   property of SeaZone Solutions or are duly licensed to SeaZone Solutions and
   that this Sub-Licence does not assign or transfer to the Sub-Licensee any right,
   title or interest therein except for the right to use the Licensed Work and
   Digital Maps in accordance with the terms and conditions of this Sub-Licence.</p>
  <h3>11. REPRESENTATIONS, WARRANTIES AND INDEMNIFICATION</h3>
  <p>11.1 The Sub-Licensee represents and warrants that it has sufficient authority
   to enter into and perform its obligations under this Sub-Licence.</p>
  <p>11.2 Jisc Collections makes no representation or warranty, and expressly disclaims
   any liability with respect to the content of the Licensed Work and Digital Maps,
   including but not limited to errors or omissions contained therein, libel, infringement
   of rights of publicity, privacy, trademark rights, moral rights, or the disclosure
   of confidential information. It is expressly agreed that any use by the Sub-Licensee
   or by any Authorised Users of the Licensed Work and Digital Maps is at the Sub-Licensee's
   sole risk.
  </p>
  <p>11.3 The Sub-Licensee agrees to notify SeaZone Solutions and Jisc Collections
   including the Datacentre acting on behalf of Jisc Collections immediately and
   provide full particulars in the event that it becomes aware of any actual or
   threatened claims by any third party in connection with any works contained
   in the Licensed Work and Digital Maps. It is expressly agreed that upon such
   notification, or if SeaZone Solutions becomes aware of such a claim from other
   sources, SeaZone Solutions may remove such work(s) from the Licensed Work and
   Digital Maps. At the request of SeaZone Solutions, the Sub-Licensee will remove
   such work(s) from any copies of the Licensed Work and Digital Maps maintained
   by the Sub-Licensee and shall make reasonable efforts to remove such works from
   any copies of the Licensed Work and Digital Maps in the possession or control
   of the Authorised Users. Failure to report knowledge of any actual or threatened
   claim by any third party shall be deemed a material breach of this Agreement.</p>
  <p>11.4 To the extent permitted by law, Jisc Collections shall not be liable to
   the Sub-Licensee for any loss or damage including any loss of profits, goodwill,
   contract or any indirect or consequential loss including loss or damage suffered
   by the Sub-Licensee as a result of an action brought by a third party.</p>
  <p>11.5 The Sub-Licensee shall fully indemnify Jisc Collections and SeaZone Solutions
   against all claims, demands, actions, costs, expenses (including but not limited
   to full legal costs and disbursements), losses and damages arising from or incurred
   by reason of any default, act or omission of the Sub-Licensee or its Authorised
   Users connected with any infringement or alleged infringement (including but
   not limited to the defence of such alleged infringements) of any Intellectual
   Property Rights enforceable in the United Kingdom in connection with the subject
   matter of this Agreement.</p>
  <p>11.6 The Licensed Work and Digital Maps is provided on an "as is" basis, and
   Jisc Collections disclaims any and all warranties, conditions, or representations
   (express, implied, oral or written), relating to the Licensed Work and Digital
   Maps or any part thereof, including, without limitation, any and all implied
   warranties of quality, performance, merchantability or fitness for a particular
   purpose. Jisc Collections further expressly disclaims any warranty or representation
   to Authorised Users, or to any third party. Jisc Collections accepts no liability
   for loss suffered or incurred by the Sub-Licensee or Authorised Users as a result
   of their reliance on the Licensed Work and Digital Maps.</p>
  <p>11.7 The Sub-Licensee represents to Jisc Collections that its computer system
   through which the Licensed Work and Digital Maps will be used is configured,
   and procedures are in place, to prohibit access to the Licensed Work and Digital
   Maps by any person other than an Authorised User; that it shall inform Authorised
   Users about the conditions of use of the Licensed Work and Digital Maps; and
   that during the term of this Sub-Licence, the Sub-Licensee will continue to
   make all reasonable efforts to bar non-permitted access and to convey appropriate
   use information to its Authorised Users.</p>
  <h3>12. FORCE MAJEURE</h3>
  <p>12.1 Either party's failure to perform any term or condition of this Sub-Licence
   as a result of circumstances beyond the control of the relevant party (including
   without limitation, war, strikes, flood, governmental restrictions, and power,
   telecommunications or Internet failures or damages to or destruction of any
   network facilities) (&quot;Force Majeure&quot;) shall not be deemed to be, or
   to give rise to, a breach of this Sub-Licence.</p>
  <p>12.2 If either party to this Sub-Licence is prevented or delayed in the performance
   of any of its obligations under this Sub-Licence by Force Majeure and if such
   party gives written notice thereof to the other party specifying the matters
   constituting Force Majeure together with such evidence as it reasonably can
   give and specifying the period for which it is estimated that such prevention
   or delay will continue, then the party in question shall be excused the performance
   or the punctual performance as the case may be as from the date of such notice
   for so long as such cause of prevention or delay shall continue.</p>
  <h3>13. ASSIGNMENT</h3>
  <p>13.1 Neither this Sub-Licence nor any of the rights and obligations under it
   may be assigned or sub-licensed by the Sub-Licensee without obtaining the prior
   written consent of Jisc Collections, such consent not to be unreasonably withheld
   or delayed. In any permitted assignment, the assignor shall procure and ensure
   that the assignee shall assume all rights and obligations of the assignor under
   this Sub-Licence and agrees to be bound to all the terms of this Sub-Licence.</p>
  <p>13.2 Notwithstanding the provisions of Clause 13.1, this Sub-Licence may not
   be assigned by the Sub-Licensee to any organisation that is not an Authorised
   Institution.
  </p>
  <h3>14. FREEDOM OF INFORMATION</h3>
  <p>14.1 For the purposes of Clause 14.3 below, "Disclosing Party" means the party
   to this Agreement from whom the relevant information originated. "Receiving
   Party" means the party in receipt of the relevant information and which is asked
   to disclose the relevant information under the FOIA.</p>
  <p>14.2 Each party shall, both during and following expiry of this Agreement, use
   all reasonable endeavours to assist the other party to comply with its obligations
   (if any) under the FOIA.</p>
  <p>14.3 Pursuant to Clause 14.2, but without prejudice to the generality of the
   same, a Receiving Party shall:</p>
  <p>14.3.1 promptly inform the Disclosing Party of any request for information received
   under the FOIA and the nature of the information being sought;</p>
  <p>14.3.2 not disclose, release information or otherwise respond to a request for
   information without prior reference to, discussion with and authorisation from
   the Disclosing Party;</p>
  <p>14.3.3 consider and apply all lawful exemptions provided under the FOIA to withhold
   information sought under a request for information.</p>
  <h3>15. GOVERNING LAW AND DISPUTE RESOLUTION</h3>
  <p>15.1 This Sub-Licence shall be governed by and construed in accordance with English
   law and the parties irrevocably agree that any dispute arising out of or in
   connection with this Sub-Licence will be subject to and within the jurisdiction
   of the English courts.</p>
  <p>15.2 Where the parties agree that a dispute arising out of or in connection with
   this Sub-Licence would best be resolved by the decision of an expert, they will
   agree upon the nature of the expert required and together appoint a suitable
   expert by agreement. In default of agreement upon whom to appoint as a suitable
   expert, such expert shall upon the request of either party be appointed by the
   Chair for the time being of the Committee of Vice-Chancellors and Principals.</p>
  <p>15.3 Any person to whom a reference is made under Clause 15.2 shall act as expert
   and not as an arbitrator and his decision (which shall be given by him in writing
   and shall state the reasons for his decision) shall be final and binding on
   the parties except in the case of manifest error or fraud.</p>
  <p>15.4 Each party shall provide the expert with such information and documentation
   as he may reasonably require for the purposes of his decision.</p>
  <p>15.5 The costs of the expert shall be borne by the parties in such proportions
   as the expert may determine to be fair and reasonable in all circumstances or,
   if no determination is made by the expert, by the parties in equal proportions.
  </p>
  <h3>16. NOTICES</h3>
  <p>16.1 All notices required to be given under this Sub-Licence shall be given in
   writing in English and sent by electronic mail, fax or first class registered
   or recorded delivery to the relevant addressee at its address set out below,
   or to such other address as may be notified by either party to the other from
   time to time under this Sub-Licence, and all such notices shall be deemed to
   have been received (a) 24 hours after successful transmission in the case of
   electronic mail or fax; (b) fourteen (14) days after the date of posting in
   the case of first class registered or recorded delivery:</p>
  <p>
   <strong>if to Jisc Collections:</strong>
   <br />Lorraine Estelle
   <br />CEO
   <br />Jisc Collections
   <br />Brettenham House
   <br />5 Lancaster Place
   <br />London WC2E 7EN
   <br />Email: <a href="l.estelle%40jisc.ac.uk">l.estelle@jisc.ac.uk</a>
  </p>
  <p>
   <strong>if to SeaZone Solutions:</strong>
   <br />Keiran Millard
   <br />Group Manager
   <br />SeaZone Solutions
   <br />Howbery Park
   <br />Wallingford
   <br />Oxfordshire
   <br />Email: <a href="mailto:k.millard@seazone.com">k.millard@seazone.com</a>
  </p>
  <p>
   <strong>if to the Sub-Licensee:</strong>
  </p>
  <p>[As stated in the Acceptance of Sub-Licence Form]
  </p>
  <p>
   <strong>if to the Datacentre:</strong>
   <br />Research and Geodata Services Manager
   <br />EDINA
   <br />Causewayside House
   <br />160 Causewayside
   <br />Edinburgh
   <br />Scotland
   <a href="mailto:edina@ed.ac.uk">edina@ed.ac.uk</a>
   <br />United Kingdom
   <br />EH9 1PR
   <br />Email: edina@ed.ac.uk
   <br />Fax: (0)131 650 3308</p>
  <h3>17. GENERAL</h3>
  <p>17.1 This Sub-Licence and its Appendices constitute the entire agreement between
   the parties relating to the Licensed Work and supersede all prior communications,
   understandings and agreements (whether written or oral) relating to its subject
   matter and may not be amended or modified except by agreement of both parties
   in writing.</p>
  <p>17.2 The Appendices shall have the same force and effect as if expressly set
   in the body of this Sub-Licence and any reference to this Sub-Licence shall
   include the Appendices.</p>
  <p>17.3 SeaZone Solutions may enforce the terms of this Agreement subject to and
   in accordance with the terms of this Sub-Licence and the provisions of the Contract
   (Rights of Third Parties) Act 1999, as amended or substituted from time to time.</p>
  <p>17.4 The invalidity or unenforceability of any provision of this Sub-Licence
   shall not affect the continuation in force of the remainder of this Sub-Licence.</p>
  <p>17.5 The rights of the parties arising under this Sub-Licence shall not be waived
   except in writing. Any waiver of any of a party's rights under this Sub-Licence
   or of any breach of this Sub-Licence by the other party shall not be construed
   as a waiver of any other rights or of any other or further breach. Failure by
   either party to exercise or enforce any rights conferred upon it by this Sub-Licence
   shall not be deemed to be a waiver of any such rights or operate so as to bar
   the exercise or enforcement thereof at any subsequent time or times.</p>
  <h2>APPENDIX 1: FEE AND PAYMENT TERMS</h2>
  <p>1. By completing the Order Confirmation and Acceptance Form as part of the Jisc
   Collections online ordering service , the Sub-Licensee accepts the terms of
   this Sub-Licence and accepts that it must pay to Jisc Collections the total
   sum of the charges for the whole term of this Sub-Licence in accordance with
   the applicable Jisc Collections charging band. Jisc Collections or a Jisc Collections
   authorised agent will invoice the Sub-Licensee annually for the applicable charge
   as set out below. All prices are exclusive of VAT, which will be payable where
   applicable.
  </p>
  <p>For the avoidance of doubt the term of this Sub-Licence will commence upon the
   date of receipt by Jisc Collections of the Order Confirmation and Acceptance
   Form and will remain in full force and effect until the date of termination
   as set out in Clause 9.</p>
  <p>In the event that the Sub-Licensee completes the Order Confirmation and Acceptance
   Form, as part of the Jisc Collections online ordering service during a given
   year, the Sub-Licensee shall pay Jisc Collections that part of the applicable
   charge which represents the period covering the date as set out in the Order
   Confirmation and Acceptance Form up to the date where the next 12 months subscription
   period starts. Thereafter the Sub-Licensee will pay Jisc Collections the full
   applicable charges for subsequent years as and where applicable.</p>
  <p>
   <span class="bold">Licensee Charges for the Service (ex VAT)</span>
  </p>

  <table border="1px solid black">
   <tr>
    <th>Jisc BANDS</td>
     <th>Year 1
      <br />August 2010- July 2011</th>
     <th>Year 2
      <br />August 2011-July 2012</th>
   </tr>
   <tr>
    <td>&nbsp;</td>
    <th>Period 1</th>
    <th>Period 1</th>
   </tr>
   <tr>
    <td>A - B</td>
    <td>&pound;3,320</td>
    <td>&pound;3,465</td>
   </tr>
   <tr>
    <td>C - D</td>
    <td>&pound;2,175</td>
    <td>&pound;2,290</td>
   </tr>
   <tr>
    <td>E - F</td>
    <td>&pound;916</td>
    <td>&pound;965</td>
   </tr>
   <tr>
    <td>G - J</td>
    <td>&pound;687</td>
    <td>&pound;723</td>
   </tr>
  </table>
  <br />
  <p>Invoices shall be due and payable no later than thirty (30) days after being
   issued by Jisc Collections or a Jisc Collection-authorised agent.</p>
  <h2>APPENDIX 2: LICENSED WORK</h2>
  <p>The Licensed Work consists of the following datasets:</p>
  <p>SeaZone HydroView Charts comprising all scale levels for UK Waters supplied as
   individual files in GeoTIFF format with LZW compression</p>
  <p>SeaZone HydroSpatial, vector marine geographic information for UK Waters consisting
   of the following Topics and Themes (see notes below).</p>

  <table border="1px solid black">
   <tr>
    <th>SeaZone HydroSpatial Topics (ISO Category)</th>
    <th>UK Hydrographic Office Derived Datasets (Themes)</th>
   </tr>
   <tr>
    <td>Bathymetry & Elevation (BE)</td>
    <td>&lsquo;Best Available&rsquo; Charted Bathymetry (comprising Shoreline, Depth
     Contours, Depth Areas and Soundings, max 1 arc second resolution)
    </td>
   </tr>
   <tr>
    <td>Natural & Physical Features (NP)</td>
    <td>Marine Topography
     <br />Coastal Type, Seabed Type, Bedforms, Water Characteristics</td>
   </tr>
   <tr>
    <td>Structures & Obstructions (SO)</td>
    <td>Shoreline Constructions
     <br />Navigational Aids
     <br />Offshore Installations
     <br />Wrecks &amp; Obstructions
    </td>
   </tr>
   <tr>
    <td>Socio Economic & Marine Use (SE)</td>
    <td>Administrative Boundaries
     <br />Exclusion &amp; Traffic Zones
     <br />National Limits (3, 6, 12 and 200 n mile limits)
     <br />Military Exercise Areas
    </td>
   </tr>
   <tr>
    <td>Conservation & Environmental Protection (CE)</td>
    <td>Protected Areas</td>
   </tr>
   <tr>
    <td>Climate & Oceanography (CO)</td>
    <td>Tidal Port & Stream Database</td>
   </tr>
  </table>
  <br />
  <p>British Geological Survey, SeaZone Solutions and JISC Collections have agreed
   that the BGS datasets DigRock250 and DigSBS250 (in which both BGS and SeaZone
   Solutions hold Intellectual Property Rights)may be supplied by the Licensee
   as a layer in Marine Digimap, regardless of whether Marine Digimap users subscribe
   to Geology Digimap. The Licensor shall permit users of Geology Digimap to use
   DigRock250 and DigSBS250 regardless of whether they subscribe to Marine Digimap.</p>
  <h2>APPENDIX 3: SECURITY SCHEDULE</h2>
  <p>
   <span class="bold">Security Requirements</span>
  </p>
  <p>These are the security requirements referred to in Clause 14.8 of the Agreement
   for the supply and use of the Licensed Data through the Digimap Service
  </p>
  <h3>1 Jisc Collections' Responsibilities</h3>
  <p>1.1 Jisc Collections will ensure that EDINA fulfils its security objectives and
   obligations as set out in this Schedule 3.</p>
  <p>1.2 Jisc Collections will ensure that EDINA appoints an officer to be responsible
   for the security of the Licensed Data at EDINA and for ensuring that the defined
   security procedures (as set out in Appendix 3 of the Sub Licence Agreement)
   are implemented and applied within Authorised Institutions (the
   <span class="bold">EDINA Responsible Officer</span>). The name of the EDINA Responsible Officer
   will be notified to HR Wallingford together with a nominated deputy on an annual
   basis. If the individual fulfilling this role changes, Jisc Collections and
   HR Wallingford will be notified as soon as possible.</p>
  <p>1.3 Jisc Collections will set up the Jisc Collections Online Ordering Service
   to implement procedures that will require all Authorised Institutions to formally
   agree to the terms of the Sub-Licence Agreement.</p>
  <h3>2 EDINA's security obligations</h3>
  <p>2.1 EDINA will:</p>
  <p>2.1.1 Develop and adopt appropriate policies, systems and procedures to ensure
   that the Licensed Data is at all times stored on and supplied via a Secure Network
   and only Authorised Institutions have access to the Licensed Data and to prevent
   unauthorised access and use, as more particularly described in paragraphs 4
   to 6 of this Schedule.</p>
  <p>2.1.2 Establish roles and responsibilities to apply within each Authorised Institution
   and to keep records of the individuals fulfilling these roles, as more particularly
   described in paragraph 3 of this Schedule.</p>
  <p>2.1.3 Provide training and information to Authorised Institutions as more particularly
   described in paragraphs 3.4 to 3.5 of this Schedule.</p>
  <p>2.1.4 Implement an incidents procedure in the event of mis-use of the Licensed
   Data as more particularly described in paragraphs 7 to 9 of this Schedule.
  </p>
  <h3>3 Site Representatives and Responsible Officers for Data Security (and Deputy)
  </h3>
  <p>3.1 EDINA will set up procedures that will require an Authorised Institution
   wishing to access and use the Licensed Data to formally appoint and identify
   the following representatives/officers:</p>
  <p>3.1.1 a Site Representative(s) who will be the main point of contact with the
   Authorised Institution;</p>
  <p>3.1.2 a Responsible Officer for Data Security;</p>
  <p>3.1.3 a Deputy Responsible Officer for Data Security.</p>
  <p>3.2 The roles of the Site Representative(s) and Responsible Officers for Data
   Security will be as follows:</p>
  <p>3.2.1 The Site Representative(s) - will be the contact point at for the Digimap
   Service within the Authorised Institution. They will also be responsible for
   general promotion of the service and support for the service relating to local
   infrastructure and procedures. It may be convenient for some Authorised Institutions
   to have more than one representative, particularly where the Authorised Institution
   is located across more than one site. In such cases however each Site Representative
   will need to be nominated formally by the Authorised Institution. The maximum
   number of Site Representatives is not expected to exceed 5.</p>
  <p>3.2.2 The Responsible Officer for Data Security (and Deputy) - will take responsibility
   for ensuring the observance of the conditions for use of the Licensed Data under
   the terms of Sub-Licence Agreement by all Authorised Users of their Authorised
   Institution. They have a duty to report to EDINA any suspected security weaknesses
   of the Digimap Service and to advise EDINA immediately of any actual incidences
   of misuse of the Licensed Data as more particularly set out in paragraphs 7
   to 9 below. The Responsible Officer for Data Security (and Deputy) also has
   a duty to ensure that action plans for resolution of incidents are implemented
   fully and to the satisfaction of Jisc Collections and HR Wallingford.</p>
  <p>3.3 EDINA will maintain a current list of Site Representatives and Responsible
   Officers for Data Security (and Deputies) together with their contact details.
   EDINA will provide this list to HR Wallingford and Jisc Collections upon request.</p>
  <p>3.4 EDINA will set up and run a scheme of training for the Site Representatives
   and Responsible Officers for Data Security (and Deputies) at Authorised Institutions.
   The training will provide information on Authorised User Registration procedures,
   security of the Licensed Data, the usage of Licensed Data permitted under this
   Agreement and the Sub-Licence Agreement and copyright arrangements.</p>
  <p>3.5 EDINA will promote the availability of the courses referred to in paragraph
   3.4 above widely across the higher and further education communities and research
   councils and encourage Authorised Institutions to nominate other relevant staff
   to attend. This activity will be ongoing throughout the period EDINA is contracted
   to manage the secure distribution and use of the Licensed Data.</p>
  <h3>4 Access Control to the Digimap Service</h3>
  <p>4.1 For the avoidance of doubt, the Digimap Service delivers a variety of geographical
   datasets in addition to the Licensed Data, and students and members of staff
   of an Authorised Institution may be eligible to access and use some or all of
   those datasets. Students and members of staff shall only be entitled to access
   and use the Licensed Data if they fall within the definition of an Authorised
   User, and their eligibility in this respect is entirely separate from their
   eligibility to access and use other datasets within the Digimap Service.</p>
  <p>4.2 Access to the Licensed Data will be via Secure Authentication.</p>
  <p>4.3 In the event that a student or a member of staff of an Authorised Institution
   requires access to the Digimap Service and Licensed Data:</p>
  <p>4.3.1 the Authorised Institution is responsible for issuing prospective users
   with Secure Authentication credentials to enable them to register with and access
   the Digimap Service;</p>
  <p>4.3.2 EDINA is responsible for implementing a registration process to allow prospective
   users having Secure Authentication credentials to register as a user of the
   Digimap Service and Licensed Data. As part of the registration process the user
   will be required to accept the Sub-Licence Agreement.</p>
  <p>4.3.3 Submission of the registration form shall initiate a validation process
   to verify that the email address provided by the prospective user is valid.
   Completion of registration is reliant upon the prospective user providing a
   valid email address to which they have access and completing the registration
   validation process.</p>
  <p>4.3.4 Both the registration form and the validation process will expire if not
   completed within a given period.</p>
  <p>4.3.5 Prior to granting access to the Digimap Service a degree of automated validation
   will be done against the information submitted by the prospective user. Flagged
   applications will be validated manually and enquiries made if necessary.</p>
  <p>4.4 EDINA's access systems will not permit access to the Licensed Data to any
   individual who is not registered as an Authorised User or who is not logged
   in appropriately using their Secure Authentication credentials which have been
   registered with EDINA as specified in section 4.3 above. EDINA's access systems
   will ensure that it is not possible to bypass the authentication access controls
   in order to access the Licensed Data.</p>
  <p>4.5 EDINA shall implement appropriate systems and procedures to ensure that:
  </p>
  <p>4.5.1 On having been given access to the Service, the system is required to display
   a document setting out copyright terms and conditions for use of the Licensed
   Data. The Authorised User will be required to indicate acceptance of these terms
   and conditions before being given access to the Licensed Data.</p>
  <p>4.5.2 a copy of the Sub-Licence Agreement can be accessed and viewed by way of
   a link from the EDINA website pages;</p>
  <p>4.5.3 if the Sub-Licence Agreement is varied (in accordance with its terms),
   this fact shall be brought to the attention of Authorised Users at the point
   at which they next log in to the Digimap Service, and the revised Sub-Licence
   Agreement is displayed in its entirety and the Authorised User positively indicates
   their acceptance of the new terms by way of "click accept".</p>
  <p>4.6 EDINA's access system will be required to provide specific access controls
   to each of the levels of the Digimap Service provided, including:</p>
  <p>4.6.1 The Licensed Data provided under the terms of the Sub-Licence Agreement
  </p>
  <p>4.6.2 The types of service available from the Licensed Data such as:</p>
  <ul style="list-style: disc;">
   <li>Data download.</li>
   <li>Maps generated from the Licensed Work.</li>
  </ul>
  <p>4.7 EDINA's access system will be required to minimise the risk of a user's session
   being hijacked by an unauthorised user. For example, this may be undertaken
   by ending a user's session automatically and disconnecting the Authorised User
   from access to the Licensed Data if they do not interact with the Digimap Service
   for a period of 60 (sixty) minutes. Other appropriate technologies and methods
   may be used to minimise this risk where necessary.</p>
  <p>4.8 EDINA will develop and adopt policies, systems and procedures that will:
  </p>
  <p>4.8.1 Ensure that only the Authorised User who has requested the Licensed Data
   in data form is able to download it.</p>
  <p>4.8.2 Ensure that these procedures can offer a secure environment for data downloaded
   through HTTP including a time limit for the period that the data is available
   for HTTP download. This period must not exceed three (3) days.</p>
  <h3>5 Identifying maps and data</h3>
  <p>5.1 EDINA will develop and adopt policies, systems and procedures that will:
  </p>
  <p>5.2 Watermark all screen images of mapping generated from the Licensed Data and
   annotate the image with the standard copyright statement that will appear along
   the bottom edge of the image, as such is referred to in Clause 16 of this Agreement.</p>
  <p>5.3 Watermark all hard copy map images printed from the Licensed Data and display
   a copyright acknowledgement, as such is referred to in Clause 16 of this Agreement.</p>
  <p>5.4 On all hard copy map images printed from the Licensed Data include the date
   of image production.</p>
  <p>5.5 Identify EDINA as the source for any of the Licensed Data products supplied
   in data form to Authorised Users along with the Authorised User name and the
   date the Licensed Data was requested for downloading; this information will
   be supplied to the Authorised User with the data requested.</p>
  <h3>6 Logging user activity</h3>
  <p>6.1 EDINA will develop and adopt policies, systems and procedures that will log
   and monitor the use of the Licensed Data by Authorised Users as follows:</p>
  <p>6.1.1 To record individual Authorised User activity for audit purposes by EDINA,
   Jisc Collections and/or HR Wallingford;</p>
  <p>6.1.2 To identify individual Authorised User activity by hard copy map extracts
   and data download;</p>
  <p>6.1.3 To make Site Representatives aware of the pattern of usage within their
   Authorised Institution;</p>
  <p>6.1.4 To make Site Representatives and Responsible Officers for Data Security
   aware of any unusual patterns of usage within their Authorised Institution;
  </p>
  <p>6.1.5 To make Authorised Users aware of any unauthorised use of their Secure
   Authentication credentials;</p>
  <p>6.1.6 To make EDINA aware of any unusual patterns of usage of the Licensed Data
   either by individual Authorised Users or by Authorised Institutions;</p>
  <p>6.1.7 To record the transfer of data downloaded to an Authorised User from one
   Authorised Institution to another Authorised User at another Authorised Institution.</p>
  <p>6.2 All logs of use of the Licensed Data will be retained and made accessible
   by EDINA to HR Wallingford and/or Jisc Collections and/or Site Representatives
   for a rolling period of five (5) years.</p>
  <p>6.3 In accordance with the Data Protection Act users will be notified that their
   use of the Licensed Data is monitored and recorded.</p>
  <h3>7 Incident Procedures</h3>
  <p>7.1 Where EDINA becomes aware, or is notified by any party, of any of the matters
   set out in Clauses 14.10 to 14.12 of this Agreement and/or Paragraph 3 of Appendix
   3 of the Sub-Licence Agreement, or any other suspected incident of misuse of
   the Licensed Data, EDINA will document the details of the incident in an incident
   log (the Security Incident Log).</p>
  <p>7.2 As the investigation into the incident proceeds, this log will be updated
   accordingly. Incidents will be classified as "User" or "Institution" in accordance
   with the definitions in paragraph 7.3 below. EDINA will inform Jisc Collections
   and HR Wallingford of the matter and the content of the Security Incident Log
   will be made available at all times to HR Wallingford and/or Jisc Collections.
   The Security Incident Log will be retained by EDINA for a period of three (3)
   years beyond the cessation of service operation by EDINA.</p>
  <p>7.3 EDINA will be required to identify an incident under one of two categories
   as follows:</p>
  <p>7.3.1 A User-related Incident - For example, but without limitation, where some
   aspect of the Sub-Licence Agreement terms and conditions were breached by an
   Authorised User and/or some activity raises doubts as to the adequacy of the
   measures to protect the availability, integrity, correct usage or supply of
   the Licensed Data to Authorised Users. For example, an isolated incident of
   misuse of the Licensed Data due to an Authorised User's misinterpretation of
   the terms of Sub-Licence agreement, a breach of password security by an Authorised
   User leading to access and use by unauthorised individuals.</p>
  <p>7.3.2 An Institutional-level Incident - For example, but without limitation,
   a failure to comply with the terms of the Sub-Licence that raises doubts as
   to the adequacy of measures within an Authorised Institution to protect the
   availability, integrity, correct usage or supply of elements of the Licensed
   Data to Authorised Users e.g. a systematic failure to acquaint users of the
   Licensed Data with the terms of use and an environment which fails to provide
   the necessary checks required under the terms of the licence for supply of the
   Licensed Data; systematic failure to manage local authentication and authorisation
   procedures appropriately; incidents of access and use by unauthorised individuals.</p>
  <h3>8 User-related Incident</h3>
  <p>8.1 When a User-related Incident is identified, EDINA will consult with Jisc
   Collections and HR Wallingford to discuss and agree appropriate corrective action.
  </p>
  <p>8.2 EDINA will then consult with the Responsible Officer for Data Security and
   the Site Representative at the relevant Authorised Institution to draw up and
   initiate a corrective action plan within ten (10) working days of the incident
   being identified.</p>
  <p>8.3 The corrective action plan will include a timetable for implementation that
   will not normally exceed six (6) working weeks from the date the incident was
   identified.
  </p>
  <p>8.4 EDINA will obtain regular reports from the Responsible Officer for Data Security
   until the corrective action plan to rectify the User-related incident has been
   completed.
  </p>
  <p>8.5 On completion of the corrective action plan, the Responsible Officer for
   Data Security will notify EDINA and, on agreement from Jisc Collections and
   HR Wallingford, the incident will be recorded as closed in the Security Incident
   log. A copy of the full Security Incident Log entry will be sent to the Jisc
   Collections and HR Wallingford for information.</p>
  <p>8.6 When the Responsible Officer for Data Security at the relevant Authorised
   Institution is unable to draw up or implement a corrective action plan to resolve
   the security incident to the satisfaction of EDINA, EDINA will immediately inform
   Jisc Collections and HR Wallingford. HR Wallingford and EDINA will then provide
   the Responsible Officer for Data Security at the relevant Authorised Institution
   with direct guidance to resolve the incident satisfactorily.</p>
  <p>8.7 Should the incident not be resolved within the agreed timescale to the satisfaction
   of HR Wallingford, Jisc Collections and EDINA, further action may be taken against
   the Authorised Institution as detailed under an Institutional-level Incident.</p>
  <h3>9 Institutional-level Incident</h3>
  <p>9.1 When an institutional-level incident is identified, EDINA will consult with
   Jisc Collections and HR Wallingford to discuss and agree appropriate action.
  </p>
  <p>9.2 If HR Wallingford and Jisc Collections agree, EDINA will instruct the Responsible
   Officer for Security at the relevant Authorised Institution to take significant
   remedial action and give a timetable for its implementation. This timetable
   shall be agreed with EDINA and must not exceed six (6) working weeks duration
   commencing from date the incident was first identified.</p>
  <p>9.3 EDINA will instruct the Responsible Officer for Data Security to provide
   weekly progress reports about the implementation of the remedial action plan.</p>
  <p>9.4 Once the Responsible Officer for Data Security has reported that the problem
   has been resolved (assuming that it is within the timetable period) EDINA will
   require documentary evidence that satisfactorily demonstrates this resolution.
   This will be shared with HR Wallingford.</p>
  <p>9.5 If EDINA or HR Wallingford is not satisfied with this evidence however, it
   will advise the Authorised Institution at senior management level and will require
   assistance in pursuing any further investigation to establish that the problem
   has been properly resolved. HR Wallingford will be notified if this course of
   action is required.</p>
  <p>9.6 Subject to this assistance being forthcoming and the necessary evidence of
   corrective action being provided, EDINA may, subject to agreement from HR Wallingford
   declare the incident closed.</p>
  <p>9.7 The Security Incident Log entry will be completed by EDINA to record the
   sequence of actions taken and the date the incident was closed.</p>
  <p>9.8 If however the problem is not resolved to the satisfaction of EDINA, EDINA
   will recommend to HR Wallingford and Jisc Collections that the offending Authorised
   Institution's right to access the Licensed Data and Digital Maps be suspended.
   Examples of where this action will be applicable are as follows:</p>
  <p>9.8.1 When significant abuse has actually taken place (rather than a weakness
   in procedures that creates the potential for abuse);</p>
  <p>9.8.2 Where in the opinion of EDINA, having consulted with HR Wallingford, the
   incident represents an unacceptable risk to the Licensed Data and will take
   significant time to resolve;</p>
  <p>9.8.3 Where the Authorised Institution has failed to provide clear evidence of
   adequate remedial action within an agreed period of time;</p>
  <p>9.8.4 Where there is evidence of a repeated lack of commitment within the Authorised
   Institution to apply agreed security procedures;</p>
  <p>9.8.5 Where following an onsite examination by EDINA, the Authorised Institution
   fails to show satisfactory evidence that the reasons for the major security
   incident have been properly resolved.</p>
  <p>9.9 If EDINA's recommendation for suspension is agreed by HR Wallingford and
   Jisc Collections, EDINA will take the following action:</p>
  <p>9.9.1 Immediately terminate all access to the Licensed Data to all Authorised
   Users at the relevant Authorised Institution;</p>
  <p>9.9.2 Immediately ensure that the offending Authorised Institution has no access
   to the Licensed Data or related Services from other Authorised Institutions
   or their Authorised Users;</p>
  <p>9.9.3 Place a moratorium on the continued use of Licensed Data or outputs from
   the Licensed Data already held within the offending Authorised Institution and
   ensures that Authorised Users within that Authorised Institution are aware that
   any continued use would be in breach of the terms of their Sub-Licence Agreement.
   In this regard, EDINA will provide additional support to the Authorised Institution
   Site Representative and Responsible Officer for Data Security;</p>
  <p>9.9.4 Set a suspension period for the Authorised Institution and notifies the
   Site Representative and Responsible Officer for Security accordingly.</p>
  <p>9.10 During the period of suspension, EDINA will support the Responsible Officer
   for Data Security and the Site Representative at the offending Authorised Institution
   to implement the agreed action plan to resolve the security problem. EDINA will
   instruct the Responsible Officer for Data Security and the Site Representative
   to provide weekly reports on implementation progress.</p>
  <p>9.11 One (1) week prior to the end of the agreed suspension period, EDINA will
   review the corrective action taken and decide whether the security problem has
   been resolved satisfactorily. If this is the case, it will advise HR Wallingford
   and Jisc Collections accordingly and recommend reinstatement of the Authorised
   Institution. Subject to HR Wallingford and Jisc Collections' agreement, EDINA
   can initiate re-instatement action having recorded the decision in the Security
   Incident Log and the planned re-instatement date.</p>
  <p>9.12 HR Wallingford may, prior to agreeing to re-instatement, request that EDINA
   carry out a formal site audit of the Authorised Institution and produce a written
   report of its findings. Copies of this report will be sent to HR Wallingford
   and Jisc Collections to inform their decision on re-instatement.</p>
  <p>9.13 An Institutional level Incident is likely to amount to a breach of the Sub
   Licence Agreement and nothing in the preceding paragraphs shall prejudice, interfere
   with, or prevent Jisc Collections from: (i) discharging its obligations under
   Clauses 14.10 and 15.1 of this Agreement; or (ii) exercising its termination
   rights under the Sub-Licence Agreement. For the avoidance of doubt, this means
   that notwithstanding that a corrective action plan may have been agreed, implemented
   and be ongoing, Jisc Collections must remain mindful of its right to terminate
   the Sub-Licence Agreement for breach of its terms at all time.</p>
 </div>
  `,
  help: {
    left: {
      text: "Help",
      link: "/webhelp/marine/marinedigimaphelp.htm"
    },
    right: {
      text: "FAQ",
      link: "/webhelp/marine/marinedigimaphelp.htm#faqs/faq_known_issues.htm"
    }
  },
  apps: [{
    id: "MARINEROAM",
    name: "Marine Roam",
    link: "/roam/marine",
    description: "View, annotate and print Marine maps using HydroSpatial One data",
    infoContent: `
      <p class="help-text">
        Marine Roam allows you to create maps at one of 12 different fixed scales. Customise your map by selecting layers to show. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, points, lines and areas)</li>
        <li>identify the feature type and view more details by clicking on the map</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `
  }, {
    id: "CHARTROAM",
    name: "Chart Roam",
    link: "/roam/chart",
    description: "View, annotate and print Marine Charts using HydroView Chart data",
    infoContent: `
      <p class="help-text">
        Chart Roam allows you to view Admiralty Charts at one of 11 different fixed scales.
        Note that these charts must NOT be used for navigation. Customise your map by:
      </p>

      <ul class="help-list">
        <li>adding annotations (text, points, lines and areas)</li>
        <li>identify information about charts shown at any given location</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or to print later</li>
      <ul>
    `
  }, {
    id: "MARINELEXICON",
    name: "Marine Lexicon",
    link: "/marinelexicon/MarineLexicon",
    description: "Symbols and abbreviations used on marine maps and charts",
    infoContent: `
      <p class="help-text">
        The Marine Lexicon (based on the International Hydrographic Organisation's ecPilot demo) allows the
        user to explore the symbols and abbreviations from Admiralty Charts which are also used within Digimap's Marine Maps facility.
      </p>
    `
  }, {
    id: "MARINEDOWNLOAD",
    name: "Marine Data Download",
    link: "/datadownload/marinedownload",
    description: "Download marine data, including bathymetry, for use in GIS/CAD",
    infoContent: `
      <p class="help-text">
        Marine Download allows you to select and download British Geological Survey data for use in GIS software
      </p>

      <ul class="help-list">
        <li>Select an area of interest and take one or more mapping and data products.</li>
      <ul>
    `,
    ipAccessRestricted: true
  }]
}, {
  id: "environment",
  name: "Environment",
  icon: `
    <svg x="0px" y="0px" width="68.029px" height="68.029px" viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029">
      <g>
        <circle cx="27.81" cy="25.247" r="3.169"/>
        <path d="M53.256,25.344c-0.426-0.327-1.43-0.896-1.914-0.989c-2.103-0.403-3.595-0.65-6.503-0.929
          c-5.927-0.567-6.969-0.677-7.958-0.393c-1.158,0.333-2.233,1.047-3.47,1.261c-0.326,0.056-0.666,0.1-0.985,0.135
          c0.047,0.266,0.076,0.539,0.076,0.819c0,0.73-0.172,1.418-0.469,2.034c0.299,0,0.67,0,1.129,0c1.545,0,3.401,0.265,4.575,0.336
          c0.449,0.027,4.266-0.139,8.607-0.347c2.835-0.136,5.91-0.357,6.696-0.543C53.645,26.584,53.68,25.667,53.256,25.344z"/>
        <path d="M26.682,20.696c-0.121-0.209-0.261-0.452-0.424-0.735c-0.773-1.338-1.471-3.077-1.996-4.129
          c-0.201-0.404-2.254-3.625-4.605-7.282c-1.535-2.387-3.264-4.94-3.818-5.527c-0.425-0.45-1.236-0.022-1.306,0.505
          c-0.069,0.533-0.062,1.688,0.101,2.153c0.703,2.022,1.234,3.438,2.447,6.097c2.472,5.416,2.897,6.374,3.639,7.088
          c0.867,0.836,2.023,1.411,2.827,2.375c0.254,0.305,0.501,0.635,0.719,0.937C24.889,21.458,25.728,20.932,26.682,20.696z"/>
        <path d="M24.419,28.486c-0.125,0.216-0.271,0.469-0.441,0.765c-0.773,1.339-1.93,2.812-2.579,3.793
          c-0.249,0.376-2.013,3.764-4.003,7.629c-1.299,2.522-2.646,5.296-2.878,6.069c-0.177,0.594,0.599,1.082,1.091,0.879
          c0.497-0.207,1.491-0.791,1.814-1.164c1.4-1.619,2.359-2.787,4.057-5.167c3.454-4.849,4.07-5.696,4.318-6.696
          c0.291-1.168,0.211-2.458,0.645-3.635c0.139-0.378,0.304-0.765,0.459-1.108C25.933,29.66,25.075,29.172,24.419,28.486z"/>
        <path d="M31.182,64.16c-0.083-1.274-1.602-34.401-1.602-34.401s-0.291,0.134-0.588,0.208c-0.312,0.079-0.727,0.079-0.727,0.079
          c-0.358,0.732-0.571,1.944-0.648,3.319c-0.075,1.32-0.363,2.439-0.805,3.243c-0.305,0.556-0.867,1.366-1.141,1.79
          c0,0-1.177,24.417-1.236,25.762C24.378,65.506,31.276,65.575,31.182,64.16z"/>
      </g>
    </svg>
  `,
  description: "Environment Digimap offers a range of Land Cover map and data products.",
  subscriptionRequired: true,
  licenceUrl: "/webhelp/environment/terms_of_use/licence_agreement.htm",
  licence: `
 <div class="licence-text">
  <h2>
   CENTRE FOR ECOLOGY &amp; HYDROLOGY DATA END-USER LICENCE AGREEMENT FOR AUTHORISED
   USERS
  </h2>
  <p>
   1. DEFINITIONS
  </p>
  <p>
   1.1 In this End-User Licence, the following expressions shall have the following
   meanings:
  </p>
  <table>
   <tr>
    <td>
     "Authorised Institution"
    </td>
    <td>
     means an Institution which has entered into an End User Licence agreement with
     JISC Collections with regard to Use of the Licensed Work.
    </td>
   </tr>
   <tr>
    <td>
     "Authorised Users"
    </td>
    <td>
     means individuals who are authorised by the Authorised Institution to access the
     Authorised Institution's information services whether on-site or off-site
     via Secure Authentication and who are affiliated to the Authorised Institution
     as a current student (including but not limited to undergraduates and postgraduates),
     member of staff (whether on a permanent or temporary basis including retired
     members of staff and any teacher who teaches Authorised Users in the United
     Kingdom) or contractor of the Authorised Institution. Persons who are not
     a current student, member of staff or a contractor of the Authorised Institution,
     but who are permitted to access the Authorised Institution's information services
     from computer terminals or otherwise within the physical premises of the Authorised
     Institution ["Walk-In Users"] are also deemed to be Authorised Users, only
     for the time they are within the physical premises of the Authorised Institution.
     Walk-In Users may not be given means to access the Licensed Work when they
     are not within the physical premises of the Authorised Institution. For the
     avoidance of doubt, Walk-In Users may not be given access to the Licensed
     Work by any wireless network provided by the Authorised Institution unless
     such network is a Secure Network.
    </td>
   </tr>
   <tr>
    <td>
     "Commercial Use"
    </td>
    <td>
     means use of the Licensed Work, Digital Maps or Digital Data other than for "Educational
     Purposes" (as hereinafter defined). For the avoidance of doubt, neither the
     recovery of direct cost by the Authorised Institution from Authorised Users,
     nor use by the Authorised Institution or Authorised Users of the Licensed
     Work in the course of research funded by a commercial organisation is deemed
     to constitute Commercial Use.
    </td>
   </tr>
   <tr>
    <td>
     "Datacentre"
    </td>
    <td>
     means a datacentre appointed from time to time by HEFCE.
    </td>
   </tr>
   <tr>
    <td>
     "Digital Data"
    </td>
    <td>
     means that part of the Licensed Work that will be made available via Secure Authentication
     as digital data and not as Digital Maps.
    </td>
   </tr>
   <tr>
    <td>
     "Digital Maps"
    </td>
    <td>
     means use of the maps created by a Datacentre from the Licensed Work to be used
     in a Service provided
    </td>
   </tr>
   <tr>
    <td>
     "Educational Purposes"
    </td>
    <td>
     means for the purpose of education, teaching, distance learning, private or non-commercial
     study and/or private or non-commercial bone fide academic research to further
     a body of knowledge, where the research is not for Commercial Use.
    </td>
   </tr>
   <tr>
    <td>
     "HEFCE"
    </td>
    <td>
     means the Higher Education Funding Council for England.
    </td>
   </tr>
   <tr>
    <td>
     "Institution"
    </td>
    <td>
     means a higher or further education institution in the UK whose name appears on
     the most up to date list of higher and further education institutions found
     on line at <a href="http://www.jisc.ac.uk/coll_allbanding">http://www.jisc.ac.uk/coll_allbanding</a>
    </td>
   </tr>
   <tr>
    <td>
     "Intellectual Property Rights"
    </td>
    <td>
     means patents, trademarks, trade names, design rights, copyright (including rights
     in computer software and moral rights), database rights, rights in know-how
     and other intellectual property rights, in each case whether registered or
     unregistered and including applications for the grant of any of the foregoing
     and all rights or forms of protection having equivalent or similar effect
     to any of the foregoing which may subsist anywhere in the world.
    </td>
   </tr>
   <tr>
    <td>
     JISC Collections
    </td>
    <td>
     are the trading name of JISC Collections and Janet Limited (a JISC Group company).
     set up to (1) carry on from the UK funding bodies all or any of the businesses
     of establishing, managing and providing access to the UK learning community
     and to acquire and grant licences for access and use of learning material
     for the advancement and benefit of the UK learning community; (2) acquire
     and grant licences for access and use of electronic resources for the community
     of bodies and institutions engaged in the provision or support of education,
     learning and/or research in the UK and elsewhere in the world.
    </td>
   </tr>
   <tr>
    <td>
     "JORUM Repository"
    </td>
    <td>
     means the central repository of learning and teaching material funded by the UK
     funding bodies.
    </td>
   </tr>
   <tr>
    <td>
     "Licensed Work"
    </td>
    <td>
     means the material as identified in Appendix 1
    </td>
   </tr>
   <tr>
    <td>
     "Service"
    </td>
    <td>
     means a service provided by HEFCE, JISC Collections or any Datacentre acting on
     its behalf such as (but not limited to) Digimap, relating to the collection
     of Centre for Ecology &amp; Hydrology's digital data known to the parties
     as "Centre for Ecology &amp; Hydrology" comprising the datasets as listed
     in Appendix 1 and such other Centre for Ecology &amp; Hydrology data products
     as HEFCE and Centre for Ecology &amp; Hydrology may agree from time to time.
    </td>
   </tr>
   <tr>
    <td>
     "Secure Authentication"
    </td>
    <td>
     means access to the Licensed Work by Security Assertion Mark-up Language (SAML)
     technology based authentication, Internet Protocol ("IP") ranges or by another
     means of authentication agreed in writing between the Licensor and the Licensee
     from time to time.
    </td>
   </tr>
   <tr>
    <td>
     "Secure Network"
    </td>
    <td>
     means a network which is only accessible by Secure Authentication.
    </td>
   </tr>
   <tr>
    <td>
     "Use"
    </td>
    <td>
     means viewing, copying, adaptation, reproduction, manipulation or modification
     of the Licensed Work, Digital Maps and Digital Data to create customised maps
     and models and any further use of such customised maps and models by Authorised
     Users in accordance with Clauses 3 and 4 of this End-User Licence Agreement.
    </td>
   </tr>
  </table>
  <br />
  <p>
   1.2 Headings contained in this End-User Licence are for reference purposes only
   and shall not be deemed to be an indication of the meaning of the clause to
   which they relate.
  </p>
  <p>
   1.3 Where the context so implies, words importing the singular number shall include
   the plural and vice versa and words importing the masculine shall include the
   feminine and vice versa.
  </p>
  <h3>
   2. GRANT OF END-USER LICENCE
  </h3>
  <p>
   2.1 JISC Collections agrees to grant to Authorised Users access and use of the
   Licensed Work throughout the term of this End-User Licence by Secure Authentication
   for Educational Purposes only.
  </p>
  <h3>
   3. USE OF THE LICENSED WORK
  </h3>
  <p>
   3.1 Subject to the provisions of Appendix 1b throughout the term of this End-User
   Licence the Authorised Users may for Educational Purposes only:
  </p>
  <p>
   3.1.1 make such temporary local electronic copies of all or part of the Licensed
   Work, Digital Maps and Digital Data as are necessary to ensure efficient use
   by Authorised Users, provided that such use is subject to all the terms and
   conditions of this End-User Licence;
  </p>
  <p>
   3.1.2 allow Authorised Users to access the Licensed Work by Secure Authentication
   in order to search, retrieve, view, display and otherwise use parts thereof
   including but not limited to Use the Digital Data in accordance with the terms
   of this End-User Licence;.
  </p>
  <p>
   3.1.3 electronically save parts of the Licensed Work;
  </p>
  <p>
   3.1.4 print out copies of parts of the Licensed Work;
  </p>
  <p>
   3.1.5 incorporate parts of the Licensed Work in printed and non-manipulable (e.g.
   locked .PDF file) electronic course packs, study packs and course notes hosted
   on a Secure Network, virtual learning environments, managed learning environments
   and multi-media works. Each item shall carry the appropriate copyright notice
   and/or acknowledgements as listed in Appendix 1b. Course packs in non-electronic
   non-print perceptible form, such as Braille, may also be offered to Authorised
   Users;
  </p>
  <p>
   3.1.6 incorporate parts of the Licensed Work, in printed or electronic form in
   assignments and portfolios, theses and in dissertations (&ldquo;the Academic
   Works&rdquo;), and to make reproductions of the Academic Works for personal
   use and library deposit. Reproductions of the Academic Works can be provided
   to sponsors of those Academic Works. Authorised Users must specify the title
   and copyright owner of the Licensed Work used in the Academic Works, as listed
   in Appendix 1b of this Agreement.
  </p>
  <p>
   Undertake the following activities, subject in each case to stating any required
   acknowledgements as listed in Appendix 1b of this Agreement:
  </p>
  <p>
   3.1.7 display, download and print parts of the Licensed Work and Digital Maps for
   the purpose of promotion of the Licensed Work, testing of the Licensed Work
   and Digital Maps, or for training Authorised Users;
  </p>
  <p>
   3.1.8 publicly display or publicly perform parts of the Licensed Work and Digital
   Maps as part of a presentation at a seminar, conference, or workshop, or other
   such similar activity;
  </p>
  <p>
   3.1.9 make such copies of training material and network on a Secure Network such
   training material as may be required for the purpose of using the Licensed Work
   and Digital Maps in accordance with this End-User Licence; and
  </p>
  <p>
   3.1.10 use Digital Maps in brochures, leaflets and flyers;
  </p>
  <p>
   3.1.11 publish Digital Maps on the website of the Authorised Institution or websites
   created as part of a course or project;
  </p>
  <p>
   3.1.12 print and use copies of the Licensed Work and Digital Maps as part of a
   Post Graduate Certificate in Education course in schools;
  </p>
  <p>
   3.1.13 deposit in perpetuity the learning and teaching objects as referred to in
   Clause 3.1.9 in electronic repositories operated by the Authorised Institution
   on a Secure Network and in the JORUM Repository. The access and use of such
   learning and teaching objects shall be governed by the terms and conditions
   of the applicable repository.
  </p>
  <h3>
   4. RESTRICTIONS
  </h3>
  <p>
   4.1 Save as provided herein, the Authorised Institution and Authorised Users may
   not:
  </p>
  <p>
   4.1.1 sell or resell the Licensed Work, Digital Data and/or Digital Maps unless
   the Authorised Institution or an Authorised User has been granted prior written
   consent by Centre for Ecology &amp; Hydrology to do so;
  </p>
  <p>
   4.1.2 redistribute, publish or otherwise make any information contained in any
   part of the Licensed Work, Digital Data and/or Digital Maps available in any
   manner or on any media other than that allowed under this Agreement;
  </p>
  <p>
   4.1.3 remove, obscure or modify copyright notices, text acknowledgments or other
   means of identification or disclaimers as they appear;
  </p>
  <p>
   4.1.4 save as provided for under this End-User Licence, display or distribute any
   part of the Licensed Work, Digital Data and/or Digital Maps on any electronic
   network, including without limitation the Internet and the World Wide Web, and
   any other distribution medium now in existence or hereinafter created, other
   than on a Secure Network;
  </p>
  <p>
   4.1.5 save in relation to Clauses 3.1.6, 3.1.7, 3.1.12, and 3.1.13, permit or allow
   anyone other than Authorised Users to access or use the Licensed Work, Digital
   Data and/or Digital Maps;
  </p>
  <p>
   4.1.6 use all or any part of the Licensed Work and Digital Maps for any Commercial
   Use or for any purpose other than Educational Purposes, the restriction to include
   any use of the Licensed Work and the Digital Maps (or subsequently derived works)
   where it is possible to reverse engineer back to or recompile the original Licensed
   Work and the Digital Maps;
  </p>
  <p>
   4.1.7 save in relation to Clause 3.1.7 and 3.1.13, permit any part of the Licensed
   Work, Digital Data and/or Digital Maps to be electronically transmitted to any
   other recipient except where the recipient is an Authorised User under the terms
   of a valid Centre for Ecology &amp; Hydrology Data End-User Licence Agreement.
  </p>
  <p>
   4.2 This Clause 4 shall survive termination of this End-User Licence for any reason.
  </p>
  <h3>
   5. TERM AND TERMINATION
  </h3>
  <p>
   5.1 JISC Collections may terminate this End-User Licence at any time on the material
   breach or repeated other breaches by the Authorised Institution or Authorised
   User of any obligation under this End-User Licence by serving a written notice
   identifying the nature of the breach. The termination will become effective
   thirty days after receipt of the written notice unless during the relevant period
   of thirty (30) days the defaulting party remedies the breach.
  </p>
  <p>
   5.2 Notwithstanding anything to the contrary herein, this End-User Licence will
   be treated as if terminated if the Centre for Ecology &amp; Hydrology data supply
   and licence agreement between Centre for Ecology &amp; Hydrology and JISC Collections
   terminates for any reason.
  </p>
  <p>
   5.3 Upon a breach by the Authorised Institution or the Authorised User, on-line
   access to the Licensed Work, Digital Data and/or Digital Maps shall be terminated.
  </p>
  <p>
   5.4 Upon termination of this End-User Licence, copies of any part of the Licensed
   Work made by the Authorised Users may not be retained and used, other than as
   provided for under this clause. Print copies may be used after termination of
   this Agreement subject to the terms of Clauses 3 and 4 of this End-User Licence,
   which terms shall survive any termination of this End-User Licence. For the
   avoidance of doubt copies of parts of the Licensed Work incorporated in course
   packs, study packs, course notes, multi-media works and Academic Works in accordance
   with Clauses 3.1.5 and 3.1.6 may be deposited by Authorised Institutions and
   Authorised Users in institutional repositories and archives or other repositories
   with the written consent of the Licensor.
  </p>
  <h3>
   6. ACKNOWLEDGEMENT AND PROTECTION OF INTELLECTUAL PROPERTY RIGHTS
  </h3>
  <p>
   6.1 The Authorised User acknowledges that the Intellectual Property Rights in the
   Licensed Work, Digital Data and/or Digital Maps (save for the Intellectual Property
   Rights in the software used by a Datacentre in the creation of Digital Maps
   and any Intellectual Property Rights in any Service provided by a Datacentre
   other than the Licensed Work and Digital Maps themselves) are the sole and exclusive
   property of Centre for Ecology &amp; Hydrology or are duly licensed to Centre
   for Ecology &amp; Hydrology and that this End-User Licence does not assign or
   transfer to the Authorised Institution any right, title or interest therein
   except for the right to use the Licensed Work in accordance with the terms and
   conditions of this End-User Licence.
  </p>
  <h3>
   7. REPRESENTATIONS, WARRANTIES AND INDEMNIFICATION
  </h3>
  <p>
   7.1 Other than the express warranties stated in this Clause 7, the Licensed Work
   is provided on an &ldquo;as is&rdquo; basis, and JISC Collections and the Centre
   for Ecology &amp; Hydrology hereby disclaim any and all warranties, conditions,
   or representations (express, implied, oral or written), relating to the Licensed
   Work or any part thereof, including, without limitation any and all warranties
   of quality, performance, merchantability or fitness for a particular purpose,
   that the Licensed Work is complete or error free or that its use by the Authorised
   Institution and Authorised Users will not constitute any libel, breach of confidence
   or infringement of the intellectual property rights of any third party.
  </p>
  <h3>
   8. FORCE MAJEURE
  </h3>
  <p>
   8.1 Either party&rsquo;s failure to perform any term or condition of this End-User
   Licence as a result of circumstances beyond the control of the relevant party
   (including without limitation, war, strikes, flood, governmental restrictions,
   and power, telecommunications or Internet failures or damages to or destruction
   of any network facilities) [&quot;Force Majeure&quot;] shall not be deemed to
   be, or to give rise to, a breach of this End-User Licence.
  </p>
  <h3>
   9. GOVERNING LAW AND DISPUTE RESOLUTION
  </h3>
  <p>
   9.1 This End-User Licence shall be governed by and construed in accordance with
   English law and the parties irrevocably agree that any dispute arising out of
   or in connection with this End-User Licence will be subject to and within the
   jurisdiction of the English courts.
  </p>
  <h3>
   10. GENERAL
  </h3>
  <p>
   10.1 This End-User Licence and its Schedules constitute the entire agreement between
   the parties relating to the Licensed Work and supersede all prior communications,
   understandings and agreements (whether written or oral) relating to its subject
   matter and may not be amended or modified except by agreement of both parties
   in writing.
  </p>
  <p>
   10.2 The Schedules shall have the same force and effect as if expressly set in
   the body of this End-User Licence and any reference to this End-User Licence
   shall include the Schedules.
  </p>
  <p>
   10.3 Centre for Ecology &amp; Hydrology may directly enforce and rely on the terms
   of this End-User Licence that are expressed or intended to be for its benefit
   (including, but not limited to, clauses 3, 4, 6 and 7, subject to and in accordance
   with the terms of this End-User Licence under the provisions of the Contract
   (Rights of Third Parties) Act 1999, as amended or substituted from time to time.
   Otherwise, no provision of this End-User Licence is intended to be enforceable
   by any person who is not a party to it.
  </p>
  <p>
   10.4 The invalidity or unenforceability of any provision of this End-User Licence
   shall not affect the continuation in force of the remainder of this End-User
   Licence.
  </p>
  <h2>APPENDIX 1: LICENSED WORK</h2>
  <p>The Licensed Work consists of the following datasets:</p>

  <table border="1px solid black">
   <tr>
    <th>Product</th>
    <th>Description
    </th>
    <th>Details of area supplied
    </th>
   </tr>
   <tr>
    <td>LCM2007 Vector
    </td>
    <td>The vector data product is provided as polygons (land parcels) with each parcel
     having a list of attributes attached to it. These include its size, source
     images, Broad Habitat, Target Class, spectral variant and class probabilities.
    </td>
    <td>Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2007 25m Raster
    </td>
    <td>The raster data have been derived from the vector dataset on a 25m grid, consisting
     of 23 Target Classes.
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2007 1km Raster Dominant
    </td>
    <td>The 1km products for LCM2007 were created by summarising the LCM2007 25m raster
     data set to produce percentage cover for each class and to identify the dominant
     (most widespread) class in each 1km pixel;
     <br/>Dominant cover at 1km for LCM2007 classes (23 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2007 1km Raster Dominant for Aggregate Classes
    </td>
    <td>Dominant cover at 1km for LCM2007 Aggregate classes (10 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2007 1km Raster Summary
    </td>
    <td>Percentage cover at 1km for LCM2007 classes (23 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2007 1km Raster Summary for Aggregate Classes
    </td>
    <td>Percentage cover at 1km for LCM2007 Aggregate classes (10 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM 2000 Level 2 Vector
    </td>
    <td>The LCM 2000 vector product was the first LCM vector product & the most detailed
     LCM 2000 product. Each polygon represents a parcel of land and has attributes
     describing land cover and metadata. Minimum Mappable Unit for land cover parcels:
     0.5ha.
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM 2000 25m Raster
    </td>
    <td>The map updates and substantially upgrades the <a href="http://www.ceh.ac.uk/LandCoverMap1990.html">Land Cover Map of Great Britain

     (LCMGB) 1990</a>
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2000 1km Raster Dominant
    </td>
    <td>Percentage cover at 1km for LCM2000 classes (26 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2000 1km Raster Dominant for Aggregate Classes
    </td>
    <td>Dominant cover at 1km for LCM2000 Aggregate classes (10 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2000 1km Raster Summary
    </td>
    <td>Percentage cover at 1km for LCM2000 classes (26 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM2000 1km Raster Summary for Aggregate Classes
    </td>
    <td>Percentage cover at 1km for LCM2000 Aggregate classes (10 land cover classes).
    </td>
    <td>Great Britain & Northern Ireland
    </td>
   </tr>
   <tr>
    <td>LCM 1990 25m Raster
    </td>
    <td>The map, based on a 25m grid, records 25 cover types, consisting of sea and
     inland water, beaches and bare ground, developed and arable land, and 18 types
     of semi-natural vegetation
    </td>
    <td>Great Britain
    </td>
   </tr>
   <tr>
    <td>LCM 1990 1km Raster Dominant
    </td>
    <td>Percentage cover at 1km for LCM1990 classes (25 land cover classes).
    </td>
    <td>Great Britain</td>
   </tr>
   <tr>
    <td>LCM 1990 1km 1990 1km Raster Summary
    </td>
    <td>Dominant cover at 1km for LCM1990 Aggregate classes (25 land cover classes).
    </td>
    <td>Great Britain</td>
   </tr>
  </table>
  <br />
  <h2>Appendix 1b</h2>
  <h3>Notices and acknowledgements</h3>
  <p>For use of the LCM2007 products listed in Appendix 1 above, or data derived from
   using the LCM 2007 products in scientific &amp;/or academic publications or
   reports, accepted scientific referencing conventions will apply and you will
   act reasonably in carrying out such referencing.</p>
  <p>The source of the LCM2007 product, or data derived from using the LCM 2007 products,
   must be acknowledged in all publications and reports arising from their use.
   The following citation shall be included in the reference list of any reports
   or publications in which LCM2007 products, or data derived from using the LCM
   2007 products have been used.</p>
  <em>
   <p>&lsquo;Morton, D., Rowland, C., Wood, C., Meek, L., Marston, C., Smith, G.,
    Simpson, I.C. 2011. Final report for LCM2007 &ndash; the new UK land cover
    map. CS Technical Report No 11/07 NERC/Centre for Ecology &amp; Hydrology 108pp.
    (CEH project number: C03259).&rsquo;</p>
  </em>
  <p>The following copyright notices and acknowledgements should be placed on all
   copies of the Licensed Work or data derived from using the Licensed Work according
   to the geographic area(s) used:</p>
  <table border="1px solid black">
   <tr>
    <th>Geographical area
    </th>
    <th>Copyright notices
    </th>
   </tr>
   <tr>
    <td>GB + Northern Ireland
    </td>
    <td>LCM2007 &copy; and database right NERC (CEH) 2011. All rights reserved. Contains
     Ordnance Survey data &copy; Crown copyright and database right 2007. &copy;
     third party licensors.
    </td>
   </tr>
  </table>
  <p>&nbsp;</p>
  <table border="1px solid black">
   <tr>
    <th>Geographical area
    </th>
    <th>Acknowledgements
    </th>
   </tr>
   <tr>
    <td>&nbsp;</td>
    <td>The following datasets have been used in the derivation of LCM2007 raster products:
    </td>
   </tr>
   <tr>
    <td>GB + Northern Ireland
    </td>
    <td>Landsat-TM5 satellite imagery &copy;
     <Satellite/Ground station operator>2007. Distributed by Eurimage.
    </td>
   </tr>
   <tr>
    <td>GB + Northern Ireland
    </td>
    <td>IRS-LISS3 satellite imagery supplied by European Space Agency &copy; Euromap,
     Space Imaging and Antrix Corporation Limited.
    </td>
   </tr>
   <tr>
    <td>GB + Northern Ireland
    </td>
    <td>SPOT-4 and SPOT-5 satellite imagery supplied by European Space Agency &copy;
     Spot Image and Centre National D'Etudes Spatiales (CNES).
    </td>
   </tr>
   <tr>
    <td>GB + Northern Ireland
    </td>
    <td>AWIFS satellite imagery &copy; Antrix Corporation Limited, distributed by Euromap.
    </td>
   </tr>
   <tr>
    <td>GB
    </td>
    <td>Contains Ordnance Survey mapping data &copy; Crown copyright and database right
     2007.
    </td>
   </tr>
   <tr>
    <td>GB
    </td>
    <td>Digital elevation data &copy; Intermap Technologies Inc. or its suppliers 2003.
    </td>
   </tr>
   <tr>
    <td>England and Wales
    </td>
    <td>Soils data for England and Wales &copy; Cranfield University (NSRI) and for
     the Controller of HMSO. 2011.
    </td>
   </tr>
   <tr>
    <td>England and Wales
    </td>
    <td>Office for National Statistics data &copy; Crown Copyright and database right.
     Contains Ordnance Survey data &copy; Crown copyright and database right 2001.
    </td>
   </tr>
   <tr>
    <td>England
    </td>
    <td>Boundaries from Rural Payments Agency &copy; Crown copyright and database right
     and/or &copy; third party licensors.
    </td>
   </tr>
   <tr>
    <td>Wales
    </td>
    <td>Boundaries from Welsh Government, Department of Rural Affairs &copy; Crown
     Copyright and database right and/or &copy; third party licensors.
    </td>
   </tr>
   <tr>
    <td>Scotland
    </td>
    <td>Boundaries from Scottish Government &copy; Crown Copyright and database right
     and/or &copy; third party licensors.
    </td>
   </tr>
   <tr>
    <td>Scotland
    </td>
    <td>SSKIB derived pH for "semi-natural" soils for upper horizon for dominant soil
     &copy; The James Hutton Institute 2010.
    </td>
   </tr>
   <tr>
    <td>Scotland
    </td>
    <td>Land Cover of Scotland dataset, Crown Copyright 1992. It shall not be reproduced
     in any form whatever without the permission of The Controller of Her Majesty's
     Stationery Office. Reproduced from OS Pathfinder Series with the permission
     of the Controller of HMSO. &copy; Crown copyright 1992.
    </td>
   </tr>
   <tr>
    <td>Scotland
    </td>
    <td>Scottish Government boundaries &copy; Crown Copyright and database right and/or
     &copy; third party licensors 2004. All rights reserved.
    </td>
   </tr>
   <tr>
    <td>NI
    </td>
    <td>Cartographic material is based upon Crown Copyright and is reproduced with
     the permission of Land & Property Services under Delegated Authority from
     the Controller of Her Majesty's Stationery Office, &copy; Crown Copyright
     and database right 2011. Licence Number 100,427.
    </td>
   </tr>
   <tr>
    <td>NI
    </td>
    <td>Soil classification map at 1:250k scale &copy; Agri-Food and Biosciences Institute
     2011.
    </td>
   </tr>
   <tr>
    <td>NI
    </td>
    <td>Boundaries &copy; Northern Ireland Statistics and Research Agency (NISRA) 2005.
    </td>
   </tr>

  </table>
  <p>&nbsp;</p>
  <p>The following copyright notice should be placed on all copies of information
   or images derived from the LCM 2007 GB products:</p>
  <p>&lsquo;Based upon LCM2007 &copy; NERC (CEH) 2011. Contains Ordnance Survey data
   &copy; Crown Copyright 2007. &copy; third party licensors.&rsquo;</p>
  <p>For use of all LCM 2000 &amp; 1990 products listed in Appendix 1 above, or data
   derived from using the LCM 2000 &amp; 1990 products, the following copyright
   notices and acknowledgements should be placed on all copies of the Licensed
   Work or data derived from using the Licensed Work. This also applies to all
   copies of information or images derived from the LCM 2000 &amp; 1990 products:</p>

  <table border="1px solid black">
   <tr>
    <th>Dataset</th>
    <th>Copyright</th>
    <th>Acknowledgement</th>
   </tr>
   <tr>
    <td>LCM2000</td>
    <td>&copy; NERC (CEH)
    </td>
    <td>
     <strong>Fuller, R. M.; Smith, G. M.</strong>; Sanderson, J. M.; Hill, R. A.;
     <strong>Thomson, A. G.</strong>. 2002 The UK Land Cover Map 2000: construction of
     a parcel-based vector map from satellite images.
     <em>Cartographic Journal</em>, 39. 15-25.</td>
   </tr>
   <tr>
    <td>LCM1990</td>
    <td>&copy; NERC (CEH)</td>
    <td>
     Fuller, R.M., Groom, G.B. and Jones, A.R. 1994a. The Land Cover Map of Great Britain:
     an automated classification of Landsat Thematic Mapper data. Photogrammetric
     Engineering & Remote Sensing, 60, 553-562.</td>
   </tr>
  </table>
 </div>
  `,
  help: {
    left: {
      text: "Help",
      link: "/webhelp/environment/environmentdigimaphelp.htm"
    },
    right: {
      text: "FAQ",
      link: "/webhelp/environment/environmentdigimaphelp.htm#faqs/faqs.htm"
    }
  },
  apps: [{
    id: "ENVIROROAM",
    name: "Environment Roam",
    link: "/roam/enviro",
    description: "View, annotate and print Land Cover and Land Use maps",
    infoContent: `
      <p class="help-text">
        Environment Roam allows you to create maps at one of 11 different fixed scales. Some views allow feature customisation. You can also:
      </p>

      <ul class="help-list">
        <li>add annotations (text, point, lines and areas)</li>
        <li>add hill shading to the map</li>
        <li>include scale bars and grid lines on printed maps</li>
        <li>generate PDF, PNG or JPG files for printing, up to A0 in size</li>
        <li>save maps to go back to or print later</li>
      </ul>
    `
  }, {
    id: "ENVIRODOWNLOAD",
    name: "Environment Data Download",
    link: "/datadownload/environmentdownload",
    description: "Download Land Cover data for use in GIS/CAD",
    infoContent: `
      <p class="help-text">
        Environment Download allows you to select and download Land Cover data for use in GIS or CAD software.
        Select an area of interest and take one or more Land Cover mapping data products for that area.
      </p>

      <ul class="help-list">
        <li>order updates to your existing data holding</li>
        <li>download previous versions of data for some products</li>
      </ul>
    `,
    ipAccessRestricted: true
  }]
}, {
  id: "discover",
  name: "Discover",
  icon: `
    <svg x="0px" y="0px" width="68.029px" height="68.029px" viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029">
      <path d="M65.591,58.704L46.41,39.523c2.373-3.705,3.769-8.102,3.769-12.821c0-13.16-10.707-23.867-23.869-23.867
        c-13.16,0-23.87,10.707-23.87,23.867c0,13.163,10.71,23.867,23.87,23.867c5.126,0,9.868-1.641,13.766-4.4l19.023,19.028
        L65.591,58.704z M7.948,26.701c0-10.123,8.238-18.358,18.362-18.358s18.358,8.235,18.358,18.358
        c0,10.122-8.234,18.362-18.358,18.362S7.948,36.823,7.948,26.701z"/>
    </svg>
  `,
  subscriptionRequired: false,
  apps: [{
    id: "OPENSTREAM",
    name: "Openstream Web Map Service",
    link: "http://openstream.edina.ac.uk",
    description: "API service offering OS OpenData using WMS",
    infoContent: `
      <p class="help-text">
        Digimap OpenStream provides access to a Web map Service (WMS) offering Ordnance Survey OpenData products.
        Can be used for mashups, embedding maps in your own webpages and to provide OS backdrop maps in desktop GIS.
      </p>
    `
  }]
}];

export const INFO_ICON = `
  <svg viewBox="0 0 68.029 68.029" enable-background="new 0 0 68.029 68.029" xml:space="preserve">
  <metadata>
    <sfw  xmlns="&ns_sfw;">
      <slices></slices>
      <sliceSourceBounds  width="60.192" height="59.253" y="267.088" x="390.334" bottomLeftOrigin="true"></sliceSourceBounds>
    </sfw>
  </metadata>
  <path d="M25.815,52.71c-2.08,3.174-4.008,6.019-6.309,8.167c-2.287,2.145-5.102,3.569-8.517,3.55
          c-0.039,0-0.075,0-0.108,0c-2.671,0-4.647-1.117-5.705-2.62c-1.074-1.503-1.322-3.154-1.327-4.354
          c0.031-1.793,0.912-5.221,1.999-9.403c1.095-4.116,2.409-8.734,3.301-12.076c0.585-2.139,1.004-3.905,1.022-4.219
          c-0.062-0.705-0.095-0.577-0.342-0.776c-0.286-0.166-1.058-0.295-1.974-0.281c-0.284,0-0.572,0.006-0.854,0.017
          c-0.422,0.015-0.833-0.136-1.134-0.426c-0.306-0.29-0.477-0.695-0.477-1.12v-2.186c0-0.808,0.621-1.479,1.426-1.541
          c3.19-0.237,10.794-0.976,16.137-2.229c0.527-0.129,1.081,0.033,1.463,0.425c0.379,0.399,0.518,0.956,0.376,1.48
          c-2.366,8.704-5.745,20.504-7.271,26.885c-0.369,1.521-0.62,2.805-0.729,3.49c0.082-0.05,0.181-0.112,0.273-0.185
          c0.422-0.311,0.939-0.827,1.463-1.431c1.049-1.223,2.123-2.797,2.924-4.008c0.468-0.699,1.407-0.892,2.112-0.443l1.787,1.136
          c0.346,0.224,0.586,0.571,0.679,0.979C26.118,51.942,26.039,52.364,25.815,52.71z M20.96,19.125
          c-0.021,0.003-0.04,0.003-0.057,0.003c-2.353,0-4.205-1.149-5.273-2.568c-1.094-1.438-1.559-3.074-1.568-4.491
          c0.017-1.4,0.544-2.976,1.647-4.373c1.095-1.38,2.927-2.535,5.251-2.521c3.929,0.01,7.119,3.181,7.136,7.062
          C28.085,16.035,24.925,19.118,20.96,19.125z"/>
  <g>
    <path d="M51.741,19.145v12.83h12.301v5.532H51.741v12.947h-5.768V37.508h-12.3v-5.532h12.3v-12.83H51.741z"/>
  </g>
  </svg>
`;
