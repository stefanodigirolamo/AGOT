import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';

const packagesImagesSwitch = props => {
  const {packagesImages} = props;

  switch (packagesImages) {
    case 'Valyrian Draft Set':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/c9/57/c9579d6e-5b9d-4cf6-b553-7c49a2de19ca/filer_publicb7a7b7a7a661-721a-4439-a64e-69eb75e78421ugt08_mock.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Things We Do For Love':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/29/d4/29d4c652-7baf-41f7-875e-78a8d5290fe0/gt54-image0500.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Core Set':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/69/7b/697b63aa-717d-4d10-8d32-095001482352/filer_publicaa33aa333931-51f8-4996-8854-b30c21cf6e5dhbo01_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Taking the Black':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/47/19/47193c03-258d-40b3-9fd6-f992dad70e1a/filer_public738a738a3510-78c5-4222-861f-6aa13715d112gt02_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Road to Winterfell':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/04/6d/046dc0b5-5a42-40df-9f75-db4919a8286c/filer_public910e910ebc40-a0a0-4a43-9efa-9f3947d6a62agt03_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "The King's Peace":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/f1/6c/f16c2c6a-528a-47ea-9bb2-d402bbfa3617/filer_public731573152d60-5fc6-4a1c-912d-e7b7ca787ef9gt04_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'No Middle Ground':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/60/e9/60e9cb94-f023-490d-bbe5-5481e02ebb9c/filer_publicf740f74059e5-b857-4616-801b-e8e0bb7779bdgt05_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Wolves of the North':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/f0/47/f0471832-40dd-46e4-b5ba-b8db4ccde1a7/filer_public2460246031f4-65bb-4663-8c6b-5ab7c04eef55gt08_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Calm over Westeros':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/2b/8d/2b8d837c-8036-4075-a80e-e47116deaa0f/filer_public062206228d8f-4f36-4c23-b9bf-6fbb08ee5634gt06_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'True Steel':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/cf/8f/cf8f9fef-5f19-4e85-b95b-c5bccecda71f/filer_public548e548ea55e-5f34-4246-869d-4e05e2346412gt07_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Across the Seven Kingdoms':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/b9/a0/b9a090e3-c146-430c-8bec-1982b8be91ef/filer_publicceaaceaad166-640a-42b9-af68-f6f93bf05540gt09_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Called to Arms':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/2b/fc/2bfc2cfe-387f-42f9-b4f8-0a224474f184/filer_publica062a06251e2-b6df-4f8b-a710-a81dc088034dgt10_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Lions of Casterly Rock':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/f9/f6/f9f68b7f-76cb-4393-9389-911e6b244f08/filer_publicffa8ffa8d0d3-52e6-4e74-a678-9589e83151begt15_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'There Is My Claim':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/be/e8/bee85f64-70ac-4188-9b9c-bbdf4e152a8f/filer_public70b570b5ca6a-5032-4767-850d-136802a788f4gt12_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Ghosts of Harrenhal':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/f5/9d/f59d938e-2f4d-439a-92bd-94a3a6308c7b/filer_publicca29ca296aa1-0628-4fe7-a4a3-5831786b15bbgt13_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "Tyrion's Chain":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/dd/22/dd227016-80f6-47f1-951b-bce3dda424d3/filer_public90709070bda1-f585-4245-a931-efb59b85653bgt14_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'All Men Are Fools':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/e3/f4/e3f4494f-90fc-4ac4-94fe-4d771480282c/filer_public32ca32cafcd5-ca06-4fb4-9cb3-9bf355f12c9bgt16_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Watchers on the Wall':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/90/86/9086642f-7549-4c26-bf7c-7703b648f6c7/filer_publicac72ac72f6a0-80c9-4276-a40d-4fb11cac9797gt22_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Guarding the Realm':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/14/03/1403d88c-8845-4630-bfa5-199f0c3c1e20/filer_publice3a0e3a0d02a-2012-4a9d-a964-c552e1afcc0dgt17_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Fall of Astapor':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/44/c3/44c3c245-d37a-4fa2-aece-7a4cc5f99f6f/filer_public4e134e130a77-203f-4dec-b2ef-ef2b759ec2f6gt18_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Red Wedding':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/fc/15/fc15815a-9f23-4222-825f-ce237b614bb8/filer_publicd3f8d3f8d600-84c9-4674-b636-5253a183ee0egt19_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "Oberyn's Revenge":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/c0/bf/c0bf888e-6c26-4ead-acdb-f813eabd0301/filer_public94b094b04f41-3e67-41d5-9a46-9f9d562e3c02gt20_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Brotherhood Without Banners':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/45/44/4544bf4c-2475-4c1e-8877-f673a2a0fb6c/filer_public3ef93ef98f1d-5fed-46d4-a57b-c826ea69872egt21_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'House of Thorns':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/0c/a4/0ca48f1c-0cff-4632-b43f-0909ec9cef21/filer_public749f749f23c2-796d-4c23-a615-68ec95079dcbgt29_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "The Archmaester's Key":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/15/03/1503bc6e-81d7-4ff6-b996-f88c581bd23b/filer_publicb242b2421308-dfa1-4f5e-ae9e-dfde0bae2172gt23_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Journey to Oldtown':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/3e/07/3e07759c-7d02-4971-8bff-f6613b248323/filer_publicedcfedcf51c6-ca41-49aa-a491-00fe86d9285bgt24_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Kingsmoot':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/51/a5/51a5d30f-35bc-411e-b9cc-ea74decc2813/filer_public66bf66bf97e9-009e-47a9-88c2-da2a68ac028bgt25_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Favor of the Old Gods':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/e0/4a/e04a656d-506e-4c5f-9e91-646e4b3b508f/filer_public961e961eaf9e-899c-4e92-8410-bbd361397c5bgt26_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Sands of Dorne':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/e2/d5/e2d5d992-f3b5-4aad-be0a-4ee63d865e77/filer_publicca80ca807517-842d-451f-b77f-611498d4d800gt30_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'For Family Honor':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/8b/d1/8bd1759b-28d2-4b4f-b0ba-9cfde251ff6a/filer_publicef4def4d0924-5215-484e-a872-3a99eae1c034gt11_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Faith Militant':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/6e/1f/6e1f1972-218a-403a-b20b-0a829987cd17/filer_public473147319f65-7846-48f7-8f3e-74cc45fec954gt27_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Someone Always Tells':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/3a/91/3a91121b-69b4-4118-be87-7fe93794546c/filer_public553c553c50b2-43c4-4eeb-ae25-60975583267egt28_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Shadow City':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/e8/22/e82225be-83fc-487e-a840-22a9aa61b9f0/filer_public9be99be9a0c6-82ba-4d37-81aa-adb3dcb4b284gt31_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The March on Winterfell':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/1c/e6/1ce6c7eb-730c-40db-99d0-36cb3d171cd5/filer_public2a802a808cf6-5e07-4f0b-8939-a39bd68a539agt32_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "Streets of King's Landing":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/1d/2d/1d2d27c3-98da-485b-a980-831cb23ccb0e/filer_public468f468fb807-fa10-4899-94b6-53cfbd40aa68gt33_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Music of Dragons':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/41/15/41157808-f7fa-4e76-8df3-55aaf3db2c21/filer_public3d063d06e320-429c-421f-b3ec-1831f577e1b2gt34_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case "In Daznak's Pit":
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/bf/d2/bfd27f05-f2b6-4bec-a191-a065494be584/filer_publice0c8e0c87cf0-4c6d-47b9-9c4a-f2a0aeb38d1dgt35_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Daggers in the Dark':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/68/6a/686a5320-e3a2-4849-9103-09f13abca28f/filer_public146814685189-2360-4318-9c18-2f66e3c4f6c7gt36_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Kings of the Isles':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/5f/ff/5fff550f-4d54-440d-b8c9-1bcd5ae521f0/filer_publica989a989a92e-9fca-410d-841a-d5ecbe744faagt45_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'At the Gates':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/d7/be/d7be3e33-826f-4747-adb0-012448ac5e5f/filer_publiccd9acd9a45fe-c989-440e-a3f6-e864b601069bgt46_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'City of Secrets':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/05/95/05956317-32db-4e70-a671-d82df97aed39/filer_publica2ffa2fffc1e-10d6-4df2-ac2d-882e586e46b9gt47_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Fury of the Storm':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/c7/f3/c7f3d05e-71a6-484e-bb6f-d2fa473d0bab/filer_public77a677a66dd2-6e99-4302-b0ee-ba7bdd4034a1gt52_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Pit of Snakes':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/e2/84/e28451d9-595d-4d2e-85dc-9a1aa21e84e1/filer_public8edf8edf78f9-5939-4978-b3e9-8dd2f2ebc119gt48_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Beneath the Red Keep':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/19/31/1931703d-aaf8-4e1e-bf7f-0ba1260edbea/filer_publicd19cd19c47bf-b014-446f-a7b7-da8faac7fb21gt49_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'The Blackwater':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/13/ef/13efd491-a360-46f4-8d7b-b35045223cb1/filer_publicbe07be0758bb-c4ea-421d-bbd2-6ab435163a68gt50_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Long May He Reign':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/8c/54/8c54d231-db93-4b42-a9c8-74fee55f5672/filer_public606960693b73-1f93-4f37-a871-b1452bee8df3gt51_main.png',
          }}
          style={styles.imageStyle}
        />
      );
    case 'Dragons of the East':
      return (
        <Image
          source={{
            uri:
              'https://b2b-media-production-product-catalog.s3.amazonaws.com/filer_public/d7/ec/d7ec9a6f-f915-4f92-a517-64e508b896a2/gt53-image0500.png',
          }}
          style={styles.imageStyle}
        />
      );
    default:
      return null;
  }
};

packagesImagesSwitch.propTypes = {
  packagesImages: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 125,
    height: 140,
  },
});

export default packagesImagesSwitch;
