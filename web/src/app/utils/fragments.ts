export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const projectCard = `
	_id,
  _type,
  slug,
  imageCover{
    ...,
    asset->
  },
  title,
	description
`;

export const moduleImage = `
	_type == 'moduleImage' => {
		image {
			...,
			asset->
		}
	}
`;

export const moduleImages = `
_type == 'moduleImages' => {
	images[] {
		...,
		image {
			...,
			asset->
		}
	}
}
`;

export const moduleProjects = `
	_type == 'moduleProjects' => {
		items[]-> {
			// ...,
			// imageCover {
			// 	...,
			// 	asset->
			// }
			${projectCard}
		}
	}
`;

export const moduleTrombi = `
	_type == 'moduleTrombinoscope' => {
		members[] {
			...,
			image {
				...,
				asset->
			}
		}
	}
`;

export const moduleRecits = `
	_type == 'moduleRecits' => {
		items[]-> {
			...,
			image {
				...,
				asset->
			}
		}
	}
`;

export const content = `
	...,
	items[]{
		...,
		image{
			asset->
		},

	}
`;

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			}
		}
	},
	fr[]{
		...,
		_type == "image" => {
			asset->
		},
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,
			}
		}
	}
`;
