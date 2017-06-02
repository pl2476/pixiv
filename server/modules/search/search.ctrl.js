// import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import pixiv from '../../spider/api/index'

export async function searchKeywords(ctx) {
  let data = null;
  let {keywords} = ctx.params
  let {bookmark} = ctx.request.query
  try {
    data = await pixiv.searchIllust({keywords,bookmark},{
      offset:10
    })
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
